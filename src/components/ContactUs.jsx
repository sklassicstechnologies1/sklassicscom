import React, { useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  role: "",
  organization: "",
  topic: "",
  message: "",
};

const ContactUs = () => {
  const [activeSection, setActiveSection] = useState("mentorsMentees");
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const required = ["firstName", "lastName", "email", "state"];
    if (activeSection === "mentorsMentees") {
      required.push("phone", "role");
    } else {
      required.push("organization", "topic");
    }

    const errs = {};
    required.forEach((key) => {
      if (!formData[key]?.trim()) errs[key] = "Required";
    });

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const payload =
      activeSection === "mentorsMentees"
        ? {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            state: formData.state,
            role: formData.role,
            organizationName: formData.organization || "",
            interestTopic: "Mentors & Mentees",
            message: formData.message || "",
          }
        : {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            state: formData.state,
            organizationName: formData.organization,
            interestTopic: formData.topic || "Partner With Mentor Collective",
            message: formData.message || "",
          };

    const url =
      activeSection === "mentorsMentees"
        ? `${BASE_URL}/api/contact`
        : `${BASE_URL}/api/contact/submit`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      alert("Form submitted successfully!");
      setFormData(initialForm);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-32 max-w-3xl mx-auto w-full">
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-[10%] max-w-3xl mx-auto w-full">
 
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-4">Contact Us</h1>
      <p className="text-center text-gray-500 mb-8 text-lg">
        Interested in joining as a mentor or mentee? Or want to partner with us? Click a tab below to proceed.
      </p>

      <div className="flex w-full mb-6">
        <span
          className={`text-lg text-center cursor-pointer flex-1 py-4 ${
            activeSection === "mentorsMentees"
              ? "text-gray-900 border-b-4 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveSection("mentorsMentees")}
        >
          <b>Mentors & Mentees</b>
        </span>
        <span
          className={`text-lg text-center cursor-pointer flex-1 py-4 ${
            activeSection === "partner"
              ? "text-gray-900 border-b-4 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveSection("partner")}
        >
          <b>Partner With Mentor Collective</b>
        </span>
      </div>

      <form className="w-full flex flex-col gap-4 text-base" onSubmit={handleSubmit}>
        {["firstName", "lastName", "email"].map((field, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="font-medium text-gray-700">
              {field === "email" ? "Email Address" : field === "firstName" ? "First Name" : "Last Name"} <span className="text-red-500">*</span>
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {errors[field] && <span className="text-red-500 text-sm mt-1">{errors[field]}</span>}
          </div>
        ))}

        {activeSection === "mentorsMentees" && (
          <>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">State <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.state && <span className="text-red-500 text-sm mt-1">{errors.state}</span>}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Are you a mentor or mentee? <span className="text-red-500">*</span></label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="Mentor">Mentor</option>
                <option value="Mentee">Mentee</option>
              </select>
              {errors.role && <span className="text-red-500 text-sm mt-1">{errors.role}</span>}
            </div>
          </>
        )}

        {activeSection === "partner" && (
          <>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700">State <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.state && <span className="text-red-500 text-sm mt-1">{errors.state}</span>}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">Organization Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              {errors.organization && <span className="text-red-500 text-sm mt-1">{errors.organization}</span>}
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-gray-700">I am interested in connecting about: <span className="text-red-500">*</span></label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="Partner With Mentor Collective">Partner With Mentor Collective</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Sponsorships">Sponsorships</option>
                <option value="Collaborations">Collaborations</option>
              </select>
              {errors.topic && <span className="text-red-500 text-sm mt-1">{errors.topic}</span>}
            </div>
          </>
        )}

        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
  type="submit"
  disabled={loading}
  className="w-1/2 mx-auto text-white py-3 rounded-md text-lg font-semibold transition-colors mt-4 mb-16"
  style={{ backgroundColor: "#ed8603" }}
>
  {loading ? "Submitting..." : "Submit"}
</button>


      </form>
    </div>
  );
};

export default ContactUs;
