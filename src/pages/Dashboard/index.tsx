import React from 'react';

import SelectInput from '../../components/SelectInput';

import ContentHeader from '../../components/ContentHeader';

import { Container } from './styles';

const Dashboard: React.FC = () => {

  const options = [
    {value: 'Elton', label: 'Elton'},
    {value: 'Tamires', label: 'Tamires'},
    {value: 'Hosana', label: 'Hosana'},
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
}

export default Dashboard;