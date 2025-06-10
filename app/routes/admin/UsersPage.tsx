import React from 'react';
import { Header } from '~/components';

import pkg from '@syncfusion/ej2-react-grids';
const {GridComponent, ColumnDirective, ColumnsDirective, Page, Sort, Filter, Inject} = pkg;
import { Users } from "~/constants";

const UsersPage = () => {
  return (
    <main className='all-users wrapper'>
      <Header
        title="Tourvisto Users"
        description="Track User Activity"
      />
      <GridComponent 
        dataSource={Users} 
       
      >
        <ColumnsDirective>
          <ColumnDirective 
            field='name' 
            headerText='Name' 
            width='150' 
            textAlign='Left'
          />
        
          
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter]}/>
      </GridComponent>
    </main>
  );
};

export default UsersPage;