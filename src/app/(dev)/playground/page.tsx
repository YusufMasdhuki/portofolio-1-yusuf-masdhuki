import YearsOfBuilding from '@/app/home/partials/years-of-building';

export default function PlaygroundPage() {
  return (
    <div className='space-y-8'>
      <h1 className='text-2xl font-semibold'>FAQ Playground</h1>
      <section className='rounded-2xl border border-white/10 p-6'>
        <YearsOfBuilding />
      </section>
    </div>
  );
}
