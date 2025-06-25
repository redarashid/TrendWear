import React from 'react';
// ... other imports

const [error, setError] = useState('');
const navigate = useNavigate();

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    // ... rest of your code
  }));
};
