import Plan from './Plan.jsx';

const Overview = () => (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Bevalplan</h1>
        <h2>Van Janine</h2>
        <Plan />
        <div style={{ marginTop: '2rem', paddingTop: '1rem' }}>
            <button style={{ marginRight: '1rem' }}>
                Item toevoegen
            </button>
            <button>
                PDF exporteren
            </button>
        </div>
    </div>
);

export default Overview;
