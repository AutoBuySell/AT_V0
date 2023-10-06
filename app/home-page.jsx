'use client';

import React from 'react';
import styled from 'styled-components';

import Header from '@/components/header';

import CompanyList from '@/components/company_list';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Body>
        <Row1>
          <div style={{ width: '25%' }}>
            <CompanyList />
          </div>
        </Row1>
      </Body>
    </main>
  );
}

const Body = styled.div`
  width: 100%;
  max-height: 90vh;
`;

const Row1 = styled.div`
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
