import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 1
              ? ['fas', 'star']
              : value >= 0.5
              ? ['fas', 'star-half-alt']
              : ['far', 'star']
          }
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 2
              ? ['fas', 'star']
              : value >= 1.5
              ? ['fas', 'star-half-alt']
              : ['far', 'star']
          }
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 3
              ? ['fas', 'star']
              : value >= 2.5
              ? ['fas', 'star-half-alt']
              : ['far', 'star']
          }
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 4
              ? ['fas', 'star']
              : value >= 3.5
              ? ['fas', 'star-half-alt']
              : ['far', 'star']
          }
        />
      </span>
      <span>
        <FontAwesomeIcon
          style={{ color }}
          icon={
            value >= 5
              ? ['fas', 'star']
              : value >= 4.5
              ? ['fas', 'star-half-alt']
              : ['far', 'star']
          }
        />
      </span>
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
