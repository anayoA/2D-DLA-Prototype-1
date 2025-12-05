# DLA Prototype v1
This throwaway prototype was created to rapidly test the core behaviour of Diffusion-Limited Aggregation in 2D using p5.js. The goal was to confirm that random walkers, boundary spawning, and distance-based sticking could produce the expected dendritic growth pattern.

# Results
The prototype successfully demonstrated correct visual behaviour, but revealed performance limitations: collision checks slowed as the tree grew, and walkers spent too long wandering. These findings informed the next iteration.
<img src="assets/First%20DLA%20with%20step%20increase,%20heavy%20lag%20once%20it%20touched%20the%20edge.png" width="200">

# Conclusion
Based on the insights gained, this prototype is now archived. A new, optimised version will be developed with squared-distance checks, controlled spawn/kill radii, and spatial hashing to support larger clusters and prepare for future 3D implementation.