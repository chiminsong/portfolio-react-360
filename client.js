// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {Location} from 'react-360-web';
import {ReactInstance} from 'react-360-web';

// const location = new Location([0, -1, -2]);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const location_coffee = new Location([0, -3, -8]);

  r360.renderToLocation(
    r360.createRoot('coffee'),
    location_coffee,
  );

  const location_laptop = new Location([-5, -3, 0]);
  r360.renderToLocation(
    r360.createRoot('laptop'),
    location_laptop,
  );

  const location_spaceship = new Location([-10, -3, 5]);
  r360.renderToLocation(
    r360.createRoot('spaceship'),
    location_spaceship,
  );

  const location_plane = new Location([-5, -3, 0]);
  r360.renderToLocation(
    r360.createRoot('plane'),
    location_plane,
  );

  const location_planets = new Location([0, -3, 5]);
  r360.renderToLocation(
    r360.createRoot('planets'),
    location_planets,
  );
 
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('test360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('background.jpg'));
}

window.React360 = {init};


// Create a location two meters in front of the user, and one meter down




