function main() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    // Pendulum parameters
    const g = 9.8; // acceleration due to gravity (m/s^2)
    const L = window.innerHeight * 0.4; // length of the pendulum (relative to screen height)
    let theta = Math.PI / 3; // initial angle (in radians)
    let omega = 0; // initial angular velocity
    const damping = 0.995; // small damping factor to simulate energy loss over time

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight * 0.2; // Pivot point at the top of the screen

    const radius = 30; // radius of the pendulum bob

    // Time step for the simulation (in seconds)
    const dt = 0.5;

    function drawPendulum() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Pendulum bob position
        const x = centerX + L * Math.sin(theta);
        const y = centerY + L * Math.cos(theta);

        // Draw the pendulum string
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Draw the pendulum bob
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle;
        ctx.fill();

        // Update the angular velocity and angle
        const alpha = - (g / L) * Math.sin(theta); // Angular acceleration
        omega += alpha * dt; // Update angular velocity
        omega *= damping; // Apply damping to simulate friction or air resistance
        theta += omega * dt; // Update the angle

        // Call the next frame
        requestAnimationFrame(drawPendulum);
    }

    // Start the pendulum simulation
    drawPendulum();
}

main();
