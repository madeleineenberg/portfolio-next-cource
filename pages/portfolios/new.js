import React from 'react';
import BaseLayout from '@/components/shared/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';

const PortfolioNew = ({ user, loading: userLoading }) => {
  debugger;
  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage header='Create Portfolio'>
        <Row>
          <Col md='6'>
            <PortfolioForm />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioNew)('admin');
