import { Metadata } from 'next';
import Form from './components/Form';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'Reserve at Milestones Restaurant | OpenTable',
  description: 'Book a table at your favorite restaurant',
};

function Reserve() {
  return (
    <div className="h-screen border-t">
      <div className="m-auto w-3/5 py-9">
        <Header />
        <Form />
      </div>
    </div>
  );
}
export default Reserve;
