import React from 'react';
import default_cat_image from '../default_cat_image.jpg';

const CatList = ({ cats }) => {
    // console.log("cats in catlist.jsx", cats);
    if (!cats || cats.length === 0) {
        return <div>
            <h2>Available Cats for Adoption</h2>
            <p>No cats found for the provided zip code.</p>
        </div>;
    }
    else return <div style={styles.grid}>
            {cats.map((cat) => (
                <a key={cat.id} href={cat.url} style={styles.card}>
                    <img src={
                        (cat.photos.length == 0 || cat.photos[0]?.medium == null) ? default_cat_image : cat.photos[0].medium
                    } alt={cat.name} style={styles.image} />
                    <div style={styles.details}>
                        <h3>{cat.name}</h3>
                        <p>Age: {cat.age}</p>
                        <p>Gender: {cat.gender}</p>
                    </div>
                </a>
            ))}
        </div>;
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
    },
    card: {
        textDecoration: 'none',
        color: 'inherit',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 'auto',
    },
    details: {
        padding: '16px',
    },
};

export default CatList;