// import React, { useState } from 'react';
// import { TextField, Button, Paper, Typography, Container } from '@material-ui/core';

// function CaseForm() {
//   const [caseData, setCaseData] = useState({
//     title: '',
//     description: '',
//     category: '',
//     evidence: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/cases', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(caseData)
//       });
//       const data = await response.json();
//       console.log('Case submitted:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <Container maxWidth="md">
//       <Paper style={{ padding: 20, marginTop: 20 }}>
//         <Typography variant="h5" gutterBottom>
//           Submit New Case
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Case Title"
//             margin="normal"
//             value={caseData.title}
//             onChange={(e) => setCaseData({...caseData, title: e.target.value})}
//           />
//           <TextField
//             fullWidth
//             label="Category"
//             margin="normal"
//             value={caseData.category}
//             onChange={(e) => setCaseData({...caseData, category: e.target.value})}
//           />
//           <TextField
//             fullWidth
//             multiline
//             rows={4}
//             label="Case Description"
//             margin="normal"
//             value={caseData.description}
//             onChange={(e) => setCaseData({...caseData, description: e.target.value})}
//           />
//           <TextField
//             fullWidth
//             multiline
//             rows={2}
//             label="Evidence (Links or Description)"
//             margin="normal"
//             value={caseData.evidence}
//             onChange={(e) => setCaseData({...caseData, evidence: e.target.value})}
//           />
//           <Button 
//             type="submit" 
//             variant="contained" 
//             color="primary"
//             style={{ marginTop: 20 }}
//           >
//             Submit Case
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// }

// export default CaseForm;

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  }
}));

const CaseForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Case submitted successfully!');
        setFormData({ title: '', description: '', category: '' }); // Reset form
      } else {
        alert('Failed to submit case. Please try again.');
      }
    } catch (error) {
      alert('Error submitting case. Please check your connection.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Submit New Case
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            name="title"
            label="Case Title"
            value={formData.title}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="category"
            label="Case Category"
            value={formData.category}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="description"
            label="Case Description"
            value={formData.description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Submit Case
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CaseForm;