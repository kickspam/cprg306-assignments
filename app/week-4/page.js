// page.js
import NewItem from './new-item';

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Item</h1>
      <NewItem />
    </main>
  );
};

export default Page;
