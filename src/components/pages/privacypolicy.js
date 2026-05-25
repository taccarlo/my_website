import useMetaTags from '../../hooks/useMetaTags';
import '../../style/style.css';

function PrivacyPolicy() {
  const metaTags = useMetaTags({
    title: 'Privacy Policy',
    description: 'Privacy Policy per le applicazioni Android Good Time Studios - Protezione dati, COPPA, GDPR, CCPA',
    canonical: '/gtsa/privacypolicy'
  });
  return (
    <>
      {metaTags}
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> March 27, 2026</p>
        <p><strong>Good Time Studios App</strong></p>

        <h2>1. Introduction</h2>
        <p>
          Good Time Studios App ("we," "us," "our," or "Company") is committed to protecting the privacy of our users, especially children. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications available on Google Play.
        </p>

        <h2>2. Children's Privacy</h2>
        <p>
          Our applications are designed with children in mind. We comply with the Children's Online Privacy Protection Act (COPPA) and similar international regulations regarding children's data protection. We do not knowingly collect personal information from children under the age of 13 without parental consent.
        </p>

        <h2>3. Information We Collect</h2>
        <p>
          We collect information in the following ways:
        </p>
        <ul>
          <li><strong>Device Information:</strong> We may collect information about your device, including device type, operating system version, unique device identifiers, and device settings.</li>
          <li><strong>Usage Information:</strong> We collect information about how you interact with our applications, including features used, content accessed, and time spent in the app.</li>
          <li><strong>Analytics Data:</strong> We use third-party analytics services to understand user behavior and improve our applications.</li>
          <li><strong>Crash Reports:</strong> We collect information about application crashes to improve stability and performance.</li>
        </ul>

        <h2>4. How We Use Your Information</h2>
        <p>
          We use the collected information for the following purposes:
        </p>
        <ul>
          <li>To provide, maintain, and improve our applications and services</li>
          <li>To analyze usage patterns and user behavior</li>
          <li>To troubleshoot technical issues and fix bugs</li>
          <li>To develop new features and enhancements</li>
          <li>To comply with legal and regulatory obligations</li>
          <li>To protect against fraudulent or illegal activity</li>
        </ul>

        <h2>5. Children's Data Protection</h2>
        <p>
          We take special care to protect children's privacy:
        </p>
        <ul>
          <li>We do not collect personally identifiable information (such as name, email, phone number) from children without verifiable parental consent</li>
          <li>We do not use behavioral advertising targeted at children</li>
          <li>We do not allow third parties to collect personal information about children through our applications</li>
          <li>We do not encourage children to share personal information</li>
          <li>We provide parental controls and safety features in our applications</li>
        </ul>

        <h2>6. Data Sharing and Third Parties</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share information with:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> Companies that assist us in operating our applications and conducting our business (analytics, hosting, crash reporting)</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, privacy, safety, or property</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
        </ul>

        <h2>7. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
        </p>

        <h2>8. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When personal information is no longer needed, we securely delete or anonymize it.
        </p>

        <h2>9. User Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your information:
        </p>
        <ul>
          <li><strong>Access:</strong> You have the right to access the personal information we hold about you</li>
          <li><strong>Correction:</strong> You can request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> You can request deletion of your information (right to be forgotten)</li>
          <li><strong>Opt-Out:</strong> You can opt out of certain data collection and uses</li>
        </ul>
        <p>
          To exercise these rights, please contact us at the address provided in the Contact Us section.
        </p>

        <h2>10. Parental Controls</h2>
        <p>
          Parents can manage their child's app usage through device-level parental controls available on Android. Additionally, our applications include in-app settings that allow users to control their preferences.
        </p>

        <h2>11. Third-Party Links and Services</h2>
        <p>
          Our applications may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
        </p>

        <h2>12. California Privacy Rights (CCPA)</h2>
        <p>
          If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
        </p>
        <ul>
          <li>Right to know what personal information is collected, used, shared, or sold</li>
          <li>Right to delete personal information</li>
          <li>Right to opt-out of the sale of personal information</li>
          <li>Right to non-discrimination for exercising your CCPA rights</li>
        </ul>

        <h2>13. GDPR Compliance (European Users)</h2>
        <p>
          If you are located in the European Union, European Economic Area, or Switzerland, we comply with the General Data Protection Regulation (GDPR). We process personal information based on legitimate interests, consent, or legal obligations. You have rights including access, rectification, erasure, and data portability.
        </p>

        <h2>14. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Effective Date" at the top of this policy and, when required, by obtaining your consent.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or our privacy practices, please contact us:
        </p>
        <address>
          <p><strong>Good Time Studios App</strong></p>
          <p>For inquiries regarding privacy, data protection, or to exercise your rights, please contact us through the Google Play Store support channels or visit our website.</p>
        </address>

        <h2>16. Additional Information for Specific Regions</h2>
        
        <h3>United Kingdom (UK GDPR)</h3>
        <p>
          UK users are protected under the UK GDPR. We comply with all applicable requirements. You can contact the Information Commissioner's Office (ICO) if you believe your rights have been violated.
        </p>

        <h3>Brazil (LGPD)</h3>
        <p>
          We comply with Brazil's Lei Geral de Proteção de Dados (LGPD). Brazilian users have rights to access, correct, and delete their personal information.
        </p>

        <h3>China</h3>
        <p>
          We comply with relevant Chinese data protection regulations. Personal information is processed and stored in accordance with applicable laws.
        </p>

        <hr />
        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '2rem' }}>
          <strong>Last Updated:</strong> March 27, 2026
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
