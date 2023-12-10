import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const headingStyle = {
    color: '#007BFF',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const contactStyle = {
    borderTop: '2px solid #007BFF',
    paddingTop: '10px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      {/* <p>Effective Date: [Date]</p> */}

      <section style={sectionStyle}>
        <h2>1. Information We Collect</h2>
        <p>
          <strong>a. Personal Information</strong>: We may collect personal information that you voluntarily provide, such as your name, contact information, and other details when using our App.
        </p>
        <p>
          <strong>b. Usage Information</strong>: We collect information about how you interact with our App, including the services you use, the pages you visit, and your preferences.
        </p>
        <p>
          <strong>c. Vendor Information</strong>: If you register as a vendor, we may collect additional information, including but not limited to, business details and offerings.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>2. How We Use Your Information</h2>
        <p>
          <strong>a. Service Provision</strong>: We use the collected information to provide and improve our spiritual and religious services, including booking purohits, conducting pujas, homas, and more.
        </p>
        <p>
          <strong>b. Vendor Services</strong>: If you register as a vendor, we use your information to facilitate vendor-related services, manage offerings, and update vendor-related information.
        </p>
        <p>
          <strong>c. Analytics</strong>: We may use analytics tools to understand how users interact with our App, helping us enhance user experience and improve our services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share information with vendors, service providers, and business partners to fulfill the services you request.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>4. Security</h2>
        <p>
          We prioritize the security of your information and take reasonable precautions to protect it. However, no method of transmission over the internet or electronic storage is entirely secure.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>5. User Control</h2>
        <p>
          You can access, update, or delete your personal information by logging into your account. If you have questions or concerns about your privacy, please contact us.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>6. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through the App.
        </p>
      </section>

      <section style={contactStyle}>
        <h2 style={headingStyle}>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>Phone Number: <a href="tel:+919686818708">+91 96868 18708</a></li>
          <li>Email: <a href="mailto:omanaseshree5893@gmail.com">omanaseshree5893@gmail.com</a></li>
          <li>Address: 1st Floor, No.48/9, 2nd cross, 5th main maruthi nagar Bangalore 560072</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
