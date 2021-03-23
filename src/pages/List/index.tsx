import React, { useMemo } from 'react';

import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import ContentHeader from '../../components/ContentHeader';

import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
      params: {
          type: string;
      }
  }
}

const List: React.FC<IRouteParams> = ({ match }) => {

  const movimentType = match.params.type;

  const pageData = useMemo(() => {
    return movimentType === 'entry-balance' ?
        {
            title: 'Entradas',
            lineColor: '#4E41F0'
        }
        :       
        {
            title: 'Saídas',
            lineColor: '#E44C4E'
        }       
},[movimentType]);

  const months = [
    {value: 7, label: 'Julho'},
    {value: 8, label: 'Agosto'},
    {value: 9, label: 'Setembro'},
  ]

  const years = [
    {value: 2020, label: 2020},
    {value: 2019, label: 2019},
    {value: 2018, label: 2018},
  ]

  return (
    <Container>
      <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-eventual">Recorrentes</button>
        <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
      </Filters>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Entradas"
          subtitle="27/10/2020"
          amount="200,00"
        />
      </Content>
    </Container>
  );
}

export default List;