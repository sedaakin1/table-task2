import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LinearProgress from '@mui/material/LinearProgress';
import { AiFillSignal } from "react-icons/ai";


const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '40px'
};

const cardStyle = {
  width: '310px',
  height: '150px',
  borderRadius: '10px',
  position: 'relative',

};

const iconStyle = {
  fontSize: '20px',
  padding: '10px',
  marginRight: '20px',
  color: 'white',
  backgroundColor: '#1976d2',
  borderRadius: '30%',
};

const selectStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};



export default function BasicCard({data}) {
  const personCount = data.length;

  console.log(data)

  const [selectedDuration, setSelectedDuration] = React.useState('15 days');

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const progress = 75;


  return (
    <div style={containerStyle}>
      <Card sx={cardStyle}>
        <CardContent>
          <FormControl sx={selectStyle}>
            <Select
              labelId="duration-label"
              id="duration-select"
              value={selectedDuration}
              onChange={handleDurationChange}
              sx={{ fontSize: '13px', color: '#808080', height: '25px' }}
            >
              <MenuItem value="15 days">15 Days</MenuItem>
              <MenuItem value="30 days">30 Days</MenuItem>
              <MenuItem value="45 days">45 Days</MenuItem>
            </Select>
          </FormControl>

          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#000000b3', fontSize: '18px' }}>
            Current Users
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={iconStyle}>
                <AiFillSignal />
              </div>
              <div style={{ fontSize: '38px' }}>{personCount}</div>
            </div>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#000000b3', fontSize: '18px' }}>
            New Users
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div style={{ fontSize: '38px' }}>75%</div>
          </Typography>
          <div>
            <LinearProgress variant="determinate" value={progress} sx={{ marginTop: '5px' }} />
          </div>
        </CardContent>
      </Card>

      <Card sx={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#000000b3', fontSize: '18px' }}>
            Active Users
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div style={{ fontSize: '38px' }}>30</div>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: '#000000b3', fontSize: '18px' }}>
            Yaş Dağilimi
          </Typography>
          
          
        </CardContent>
      </Card>


    </div>
  );
}