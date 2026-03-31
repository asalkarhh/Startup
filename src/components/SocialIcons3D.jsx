import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons3D = () => {
  const socials = [
    { icon: <FaFacebookF />, label: 'Facebook', bg: '#3b5998', bgBefore: '#365492', bgAfter: '#4a69ad' },
    { icon: <FaTwitter />, label: 'Twitter', bg: '#00aced', bgBefore: '#097aa5', bgAfter: '#53b9e0' },
    { icon: <FaInstagram />, label: 'Instagram', bg: '#e4405f', bgBefore: '#d81c3f', bgAfter: '#e46880' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', bg: '#0077b5', bgBefore: '#005f8f', bgAfter: '#3399cc' },
  ];

  return (
    <div className="social-3d-list">
      {socials.map((s, i) => (
        <a
          key={i}
          href="#!"
          className="social-3d-item hoverable"
          aria-label={s.label}
          style={{
            '--s3d-bg': s.bg,
            '--s3d-before': s.bgBefore,
            '--s3d-after': s.bgAfter
          }}
        >
          <span className="s3d-icon">{s.icon}</span>
          <span className="s3d-label">{s.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons3D;