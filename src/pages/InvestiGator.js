import React, { useEffect, useRef } from "react";
import droneImage from '../assets/investigator_image.jpg';

function InvestiGatorPage() {
    const designRef = useRef([]);
    const buildRef = useRef([]);
    const finalRef = useRef([]);
    const conclusionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        [...designRef.current, ...buildRef.current, ...finalRef.current, conclusionRef.current].forEach((el) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0) rotate(0deg)';
            }
        });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const droneDesigns = Array.from({ length: 3 }).map((_, i) => ({
        title: `Blueprint ${i + 1}`,
        desc: `Concept and layout design placeholder for drone component ${i + 1}`,
    }));

    const materials = Array.from({ length: 3 }).map((_, i) => ({
        title: `Material ${i + 1}`,
        desc: `High-performance material placeholder ${i + 1}`,
    }));

    const performanceStats = [
        { label: 'Speed', value: Math.floor(Math.random() * 40 + 60) },
        { label: 'Agility', value: Math.floor(Math.random() * 30 + 70) },
        { label: 'Battery Life', value: Math.floor(Math.random() * 40 + 50) },
        { label: 'Signal Strength', value: Math.floor(Math.random() * 20 + 80) },
        { label: 'Payload Capacity', value: Math.floor(Math.random() * 30 + 20) },
    ];

    return (
        <div style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#0d0d0d', color: '#fff' }}>
        <header
            style={{
            height: '667px',
            backgroundImage: `url('${droneImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0,0,0,0.6)',
            }}
        >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '700', textShadow: '0 0 20px #00ffff, 0 0 40px #5156b0ff', background: 'linear-gradient(90deg, #00ffff, #0008ffff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                InvestiGator UAV
            </h1>
            <p style={{ fontSize: '1.5rem', marginTop: '1rem', marginBottom: '2rem', color: '#ffffffaa' }}>
                Autonomous Flight. Maximum Precision. Unmatched Agility.
            </p>
            </div>
        </header>

        <section style={{ backgroundColor: '#f5f5f5', color: '#111', padding: '5rem 2rem' }}>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: '#0077cc' }}>
            Drone Design
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {droneDesigns.map((design, i) => (
                <div
                key={i}
                ref={el => designRef.current[i] = el}
                style={{
                    width: '250px',
                    backgroundColor: '#fff',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    textAlign: 'center',
                    opacity: 0,
                    transform: 'translateY(50px)',
                    transition: 'all 0.7s ease',
                    cursor: 'pointer',
                }}
                >
                <div style={{ width: '100%', height: '150px', backgroundColor: '#ccc', marginBottom: '1rem', borderRadius: '8px' }}>
                    <p style={{ lineHeight: '150px', color: '#888' }}>Schematic</p>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0077cc' }}>{design.title}</h3>
                <p style={{ fontSize: '1rem', color: '#333' }}>{design.desc}</p>
                </div>
            ))}
            </div>
        </section>

        <section style={{ backgroundColor: '#e0e0e0', color: '#111', padding: '5rem 2rem' }}>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: '#0077cc' }}>
            Flight & Performance
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {performanceStats.map((stat, i) => (
                <div
                key={i}
                ref={el => finalRef.current[i] = el}
                style={{
                    width: '80%',
                    backgroundColor: '#ccc',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    height: '25px',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    transition: 'all 0.8s ease',
                }}
                >
                <div style={{
                    width: `${stat.value}%`,
                    height: '100%',
                    backgroundColor: '#0077cc',
                    borderRadius: '12px',
                    textAlign: 'right',
                    paddingRight: '0.5rem',
                    color: '#fff',
                    fontWeight: '700',
                    lineHeight: '25px',
                    transition: 'width 1s ease',
                }}>
                    {stat.label} ({stat.value}%)
                </div>
                </div>
            ))}
            </div>
        </section>


        <section
            ref={conclusionRef}
            style={{
            backgroundColor: '#111',
            color: '#fff',
            padding: '5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            }}
        >
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2.5rem', marginBottom: '2rem', color: '#00ffff' }}>
            Our Mission & Conclusion
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.8', color: '#ccc' }}>
            The InvestiGator UAV represents the pinnacle of student innovation: combining advanced design, high-performance materials, and precision flight capabilities. Our mission is to explore autonomous aerial possibilities, perform real-world applications, and inspire the next generation of UAV technology.
            </p>

            <div style={{
            position: 'absolute',
            top: '50%',
            left: '-100px',
            width: '80px',
            height: '40px',
            backgroundColor: '#00ffff',
            borderRadius: '8px',
            transform: 'rotate(0deg)',
            animation: 'flyAcross 10s linear infinite',
            }}>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#0077cc', borderRadius: '8px' }}></div>
            </div>
        </section>

        {/* Footer */}
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#0a0a0a',
            borderTop: '2px solid #00ffff33',
            fontSize: '0.9rem',
            color: '#888',
        }}>
            &copy; 2025 InvestiGator UAV Project. All rights reserved.
        </footer>


        <style>{`
            @keyframes flyAcross {
            0% { left: -100px; top: 50%; transform: rotate(0deg);}
            50% { left: 110%; top: 40%; transform: rotate(15deg);}
            100% { left: 110%; top: 60%; transform: rotate(-10deg);}
            }
        `}</style>
        </div>
    );
}

export default InvestiGatorPage;