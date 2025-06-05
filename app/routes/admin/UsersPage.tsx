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
        allowPaging={true}
        allowSorting={true}
        allowFiltering={true}
        pageSettings={{ pageSize: 10 }}
        className="mt-4"
      >
        <ColumnsDirective>
          <ColumnDirective 
            field='name' 
            headerText='Name' 
            width='150' 
            textAlign='Left'
          />
          <ColumnDirective 
            field='email' 
            headerText='Email' 
            width='200'
          />
          <ColumnDirective 
            field='role' 
            headerText='Role' 
            width='100'
          />
          <ColumnDirective 
            field='status' 
            headerText='Status' 
            width='100'
          />
          <ColumnDirective 
            field='lastLogin' 
            headerText='Last Login' 
            width='150' 
            format='yMd'
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter]}/>
      </GridComponent>
    </main>
  );
};

export default UsersPage;