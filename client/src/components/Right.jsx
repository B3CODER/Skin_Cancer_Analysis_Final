// Right.jsx
import React from 'react';
import '../style/Right.css';

const Right = ({ prediction, loading }) => {
    return (
        <div className="right-wrapper">
            <div className="right">
                <div className="info">
                    <div className="result-header">Result</div>
                    <div className="result-text">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <p>
                                {prediction ? `Our analysis suggests that you may have ${prediction.description}` : 'No prediction available'}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;
