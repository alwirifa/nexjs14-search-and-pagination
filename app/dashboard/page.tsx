import React from 'react'
import Search from '../ui/search'
import Invoices, { countTotalPages } from './Invoices';
import Pagination from '../ui/Pagination';

type Props = {}

const page = async ({ searchParams } : {searchParams?: {query?: string, page?:string}}) => {
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  // const totalPages = await fetchInvoicesPages(query);
  // const limit = 10;
  // const totalPages = countTotalPages(data.filter((movie) => movie.title.toLowerCase().includes(query)), limit);

  const totalPages = 5
  // console.log(totalPages)
  
  console.log('query', query)
    return (
    <div>
        <Search placeholder='search'/>
        <Invoices query={query}/>
        <Pagination totalPages={totalPages}/>
    </div>
  )
}

export default page

