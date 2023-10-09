import NavBar from '@/app/components/NavBar';
import Form from './components/Form';
import Header from './components/Header';

function Reserve() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <div className="h-screen border-t">
          <div className="m-auto w-3/5 py-9">
            <Header />
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
export default Reserve;
