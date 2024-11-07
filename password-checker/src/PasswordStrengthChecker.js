import React, { useState } from 'react';

const calculatePasswordStrength = (password) => {
  let strength = 0;

  // Add to strength based on length
  if (password.length >= 8) strength += 1;

  // Add to strength if password contains lowercase and uppercase letters
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;

  // Add to strength if password contains numbers
  if (/\d/.test(password)) strength += 1;

  // Add to strength if password contains special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;

  // Return strength level as a string
  if (strength === 0) return 'Too Weak';
  if (strength === 1) return 'Weak';
  if (strength === 2) return 'Moderate';
  if (strength === 3) return 'Strong';
  if (strength === 4) return 'Very Strong';
};

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(calculatePasswordStrength(newPassword));
  };

  return (
    <div style={{ margin: '50px' }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        style={{ padding: '10px', width: '300px' }}
      />
      <p>Password Strength: <strong>{strength}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;