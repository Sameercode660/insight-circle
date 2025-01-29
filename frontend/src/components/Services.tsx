import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaClock, FaStar, FaLock } from "react-icons/fa";
import { MdWork, MdEmail, MdPhone } from "react-icons/md";

const MentorshipPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    mentor: "",
    timeSlot: ""
  });

  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      title: "Career Guidance",
      icon: <MdWork className="text-4xl text-blue-500 dark:text-blue-300" />,
      duration: "60 mins",
      price: "$99",
      description: "Professional career planning and development guidance"
    },
    {
      title: "Personal Development",
      icon: <FaUser className="text-4xl text-green-500 dark:text-green-300" />,
      duration: "45 mins",
      price: "$79",
      description: "Personalized coaching for personal growth and success"
    },
    {
      title: "Academic Mentoring",
      icon: <FaClock className="text-4xl text-purple-500 dark:text-purple-300" />,
      duration: "50 mins",
      price: "$89",
      description: "Expert guidance for academic excellence and planning"
    }
  ];

  const mentors = [
    {
      name: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      specialty: "Career Development",
      bio: "15+ years experience in career counseling and professional development",
      qualifications: "Ph.D. in Psychology, Certified Career Coach"
    },
    {
      name: "Prof. Michael Chen",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      specialty: "Academic Excellence",
      bio: "Former university dean with expertise in academic counseling",
      qualifications: "Ed.D., Master Certified Coach"
    },
    {
      name: "Dr. Emily Parker",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      specialty: "Personal Growth",
      bio: "Specializes in personal development and life coaching",
      qualifications: "Ph.D. in Counseling Psychology"
    }
  ];

  const testimonials = [
    {
      text: "The mentorship program transformed my career path completely!",
      rating: 5,
      author: "Anonymous Client"
    },
    {
      text: "Exceptional guidance and support throughout my journey.",
      rating: 5,
      author: "Anonymous Client"
    }
  ];
 

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative bg-blue-600 dark:bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Future with Expert Guidance
          </h1>
          <p className="text-xl mb-8">
            Connect with experienced mentors who can help you achieve your goals
          </p>
          <button
            
            className="bg-white text-blue-600 dark:text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
          >
            Book Your Session
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 dark:border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                <span>
                  <FaClock className="inline mr-2" />
                  {service.duration}
                </span>
                <span className="font-semibold">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Mentors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 dark:border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2">{mentor.name}</h3>
                <p className="text-blue-600 dark:text-blue-300 text-center mb-4">
                  {mentor.specialty}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{mentor.bio}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{mentor.qualifications}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div id="bookingForm" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 dark:border-gray-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Book Your Session</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Service</label>
              <select
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Choose a service...</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Select Mentor</label>
              <select
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                onChange={(e) => setFormData({ ...formData, mentor: e.target.value })}
              >
                <option value="">Choose a mentor...</option>
                {mentors.map((mentor, index) => (
                  <option key={index} value={mentor.name}>
                    {mentor.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
