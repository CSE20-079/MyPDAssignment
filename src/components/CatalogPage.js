import React, { useState } from 'react';
import './styles/CatalogPage.css';

const CatalogPage = () => {
    const [broadcasts, setBroadcasts] = useState([
        { id: 1, title: "Football Match", description: "Watch an exciting football match.", videoUrl: "https://www.youtube.com/embed/z2EnbBkwpi4" },
        { id: 2, title: "Basketball Game", description: "Enjoy a thrilling basketball game.", videoUrl: "https://www.youtube.com/embed/8YSrNfcKvA0" },
        { id: 3, title: "Tennis Tournament", description: "Catch the intense tennis tournament.", videoUrl: "https://www.youtube.com/embed/YJbkuGOuBL4" },
        { id: 4, title: "Swimming Competition", description: "Witness the competitive swimming events.", videoUrl: "https://www.youtube.com/embed/4ry3-AxR820" },
        { id: 5, title: "100m Sprint", description: "Follow your favourite sprinters", videoUrl: "https://www.youtube.com/embed/E895PNqSgEI" }
    ]);

    return (
        <div className="catalog-page">
            <h1>Broadcast Catalog</h1>
            <div className="broadcast-list">
                {broadcasts.map(broadcast => (
                    <div key={broadcast.id} className="broadcast-card">
                        <h2>{broadcast.title}</h2>
                        <p>{broadcast.description}</p>
                        <iframe
                            width="560"
                            height="315"
                            src={broadcast.videoUrl}
                            title={broadcast.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;