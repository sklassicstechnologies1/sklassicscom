import React, { useState } from "react";
import "../components/About.css";

// Import HomeNav and Footer if they are defined in your project

const timelineData = {
  2021: {
    title: "The Beginning of Sklassics Academy",
    description: `Founded with the vision to make quality education accessible to all, 
      Sklassics Academy started its journey by offering workshops and foundational courses 
      in various disciplines.`,
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQHNZcLIb10_LQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715255563562?e=2147483647&v=beta&t=wF_BP--MC_hm81u2eNeYCIvGIhyUFFSi_VuReD1oPVk",
  },
  2022: {
    title: "Course Expansion & Community Growth",
    description: `In 2022, Sklassics expanded its offerings to include full-fledged programs in 
      Web Development, Data Science, and more. The student community began to grow rapidly, 
      with learners from across the country joining the platform.`,
    image:
      "https://www.shutterstock.com/image-illustration/new-global-business-connection-artificial-600nw-2343748505.jpg",
  },
  2023: {
    title: "LMS Launch & CMS Integration",
    description: `A major milestone—Sklassics launched its Learning Management System (LMS) 
      along with a custom CMS, allowing admins to manage courses, batches, and student content 
      seamlessly using Firebase Firestore.`,
    image:
      "https://elearningindustry.com/wp-content/uploads/2023/05/Shutterstock_2264298833.jpg",
  },
  2024: {
    title: "AI Integration & Future Vision",
    description: `With AI-powered chatbots and course recommendations now live, 
      Sklassics Academy aims to offer a personalized learning experience to every student. 
      The academy continues to innovate in education delivery.`,
    image:
      "https://s7d1.scene7.com/is/image/dmqualcommprod/getting-personal-with-on-device-ai",
  },
};

const AboutUs = () => {
  const [activeYear, setActiveYear] = useState("2021");
  const { title, description, image } = timelineData[activeYear];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <p className="about-tag">ABOUT US</p>
          <h1 className="about-title">
            Empowering Learners to <br /> Achieve <span>Excellence</span>
            <br /> through Quality Education.
          </h1>
          <p className="about-description">
            Sklassics Academy is a growing platform dedicated to providing
            top-quality education through innovative online courses,
            personalized learning paths, and expert mentorship. From Web
            Development and Data Science to creative workshops, our mission is
            to make learning accessible, engaging, and impactful for everyone.
          </p>
          <button className="about-btn">Join the Academy</button>
        </div>
        <div className="about-hero-img">
          <img src="/image.png" alt="About Sklassics Academy" />
          {/* Ensure image.png is in the /public folder */}
        </div>
      </section>

      {/* Mission Section */}
      <section className="go-to-market">
        <div className="go-to-market-content">
          <div className="go-to-market-left">
            <h2>Built for passionate learners, guided by experts</h2>
          </div>
          <div className="go-to-market-right">
            <p>
              At Sklassics Academy, we believe in transforming education through
              expert-led training, practical skills, and real-world application.
            </p>
            <p>
              Our mission is to empower students and professionals with
              in-demand knowledge in IT, software development, data science, and
              more — all delivered through personalized learning paths.
            </p>
            <p>
              With a strong focus on hands-on experience, mentorship, and
              community learning, we are dedicated to helping individuals grow
              their careers and confidence.
            </p>
          </div>
        </div>

        <hr className="divider" />

        <div className="go-to-market-stats">
          <div className="stat-box">
            <h3>1,000+</h3>
            <p>
              Students trained in various IT and software development programs.
            </p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>
              Expert instructors with real-world experience and industry
              knowledge.
            </p>
          </div>
          <div className="stat-box">
            <h3>30+</h3>
            <p>
              Courses designed for skill development, job readiness, and
              certification.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-header">
          <p>OUR JOURNEY</p>
          <h1>The Story of Sklassics Academy</h1>
          <p className="timeline-desc">
            From a small idea to a thriving education platform, Sklassics
            Academy has grown year by year through innovation, community, and a
            passion for learning.
          </p>
        </div>

        <div className="timeline-content">
          <div className="timeline-years">
            {Object.keys(timelineData).map((year) => (
              <div
                key={year}
                className={`year ${year === activeYear ? "active" : ""}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </div>
            ))}
          </div>

          <div className="timeline-details">
            <img src={image} alt={title} />
            <div className="timeline-text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-a">
        <h2>Our Core Values</h2>
        <div className="values-container-a">
          <div className="value-card-a">
            <img
              src="https://img.freepik.com/free-vector/tiny-student-sitting-book-pile-reading-flat-illustration_74855-15547.jpg?semt=ais_hybrid&w=740"
              alt="Innovation"
            />
            <p>Innovation in Learning</p>
          </div>
          <div className="value-card-a">
            <img
              src="https://img.freepik.com/free-vector/business-target-achievement-concept-young-businessman-is-happy-that-business-is-as-successful-as-arrow-that-shoots-accurately-into-center-target-vector-illustration_1150-60919.jpg?semt=ais_hybrid&w=740"
              alt="Excellence"
            />
            <p>Commitment to Excellence</p>
          </div>
          <div className="value-card-a">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/431/853/non_2x/student-centered-education-knowledge-gaining-remote-graduation-bite-sized-learning-learn-at-own-pace-flexible-learning-process-concept-flat-modern-illustration-vector.jpg"
              alt="Student-Centered"
            />
            <p>Student-Centered Approach</p>
          </div>
          <div className="value-card-a">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQEkvCwdPk6QkQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711539209180?e=2147483647&v=beta&t=cAwXBe-ZwuT6KX4-aFyyPE_tJAj61AP98C_LWcv8uT4"
              alt="Improvement"
            />
            <p>Continuous Improvement</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

