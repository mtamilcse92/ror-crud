import React from 'react';
import { Card, CardContent, Typography, Checkbox, Box } from '@mui/material';
import { CheckCircleOutline, RadioButtonUnchecked } from '@mui/icons-material';

interface SelectableCardProps {
  title: string;
  description: string;
  selected?: boolean;
  onSelect: () => void;
}

const SelectableCard: React.FC<SelectableCardProps> = ({ title, description, onSelect, selected = false }) => {

  return (
    <Card
      variant='outlined'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        backgroundColor: selected ? '#e0e0e0' : 'inherit',
        cursor: 'pointer',
      }}
    >
      <Box display="flex" alignItems="flex-start" justifyContent="flex-start" gap={2} component={CardContent}>
        <Checkbox onClick={onSelect} icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircleOutline />} checked={selected} />
        <Box display="flex" flexDirection="column" gap={1} >
            <Typography variant="h6">{title}</Typography>
            <Typography>{description}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SelectableCard;