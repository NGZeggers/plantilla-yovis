import React, { useState, useEffect } from 'react';

export default function UnionWebsite() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredDoc, setHoveredDoc] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const documents = [
    {
      id: 'contrato',
      title: 'Contrato Colectivo de Trabajo',
      period: '2025-2027',
      description: 'Documento oficial que rige las relaciones laborales entre el IMSS y sus trabajadores',
      file: '/files/CONTRATO_COLECTIVO_DE_TRABAJO_2025-2027.pdf',
      icon: '📋'
    },
    {
      id: 'estatutos',
      title: 'Estatutos del SNTSS',
      period: '2022',
      description: 'Normativa interna y reglamento del Sindicato Nacional de Trabajadores del Seguro Social',
      file: '/files/ESTATUTOS_2022.pdf',
      icon: '📜'
    }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <img 
              src="/files/logo_govis.png" 
              alt="Logo Sindicato" 
              style={styles.logoImage}
            />
            <div style={styles.logoText}>
              <span style={styles.logoTitle}>SNTSS</span>
              <span style={styles.logoSubtitle}>Sección Sindical</span>
            </div>
          </div>
          <div style={styles.navLinks}>
            <a href="#mision" style={styles.navLink}>Misión</a>
            <a href="#documentos" style={styles.navLinkCta}>Documentos</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        ...styles.hero,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div style={styles.heroContainer}>
          <div style={styles.heroVisual}>
            {/* Corner decorations */}
            <div style={{...styles.cornerDecoration, ...styles.cornerTL}} />
            <div style={{...styles.cornerDecoration, ...styles.cornerTR}} />
            <div style={{...styles.cornerDecoration, ...styles.cornerBL}} />
            <div style={{...styles.cornerDecoration, ...styles.cornerBR}} />
            
            <div style={styles.heroContent}>
              <div style={styles.heroBadge}>
                <span>◆</span> Compromiso Sindical
              </div>
              <h1 style={styles.heroTitle}>
                Renovando e <em>Innovando</em>
              </h1>
              <p style={styles.heroSubtitle}>
                Compromiso fuerte, defensa justa
              </p>
              <p style={styles.heroDescription}>
                Protegemos el bienestar común de los trabajadores con la convicción 
                y fortaleza de un equipo unido.
              </p>
              <div style={styles.heroButtons}>
                <a href="#documentos" style={styles.btnPrimary}>
                  Ver Documentos
                </a>
                <a href="#mision" style={styles.btnSecondary}>
                  <span>+</span> Nuestra Misión <span>+</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mision" style={{
        ...styles.missionSection,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
      }}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>
              <span>◇</span> Nuestros Principios
            </div>
            <h2 style={styles.sectionTitle}>Misión y Visión</h2>
            <p style={styles.sectionDescription}>
              Los pilares que guían nuestra labor sindical
            </p>
          </div>

          <div style={styles.cardsGrid}>
            {/* Mission Card */}
            <div style={styles.card}>
              <div style={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={styles.cardTitle}>Misión</h3>
              <p style={styles.cardText}>
                Proteger el bienestar común de los trabajadores con la convicción y fortaleza 
                de un equipo unido, ejercer los derechos apegados y regidos por nuestro contrato 
                colectivo. Daremos nuestro apoyo brindando el tiempo y dando el seguimiento a 
                las demandas del trabajador. Fortalecer a todas las categorías de nuestra clínica, 
                acreditar que los derechos del trabajador sean respetados.
              </p>
              <div style={styles.cardFooter}>
                <span style={styles.cardFooterLine} />
                <span style={styles.cardFooterText}>Defensa laboral</span>
                <span style={styles.cardFooterLine} />
              </div>
            </div>

            {/* Vision Card */}
            <div style={styles.card}>
              <div style={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={styles.cardTitle}>Visión</h3>
              <p style={styles.cardText}>
                Fomentar la unión con el esfuerzo y la participación de todos para un 
                bienestar común. Ser un sindicato incluyente que promueve la participación 
                de todos los trabajadores en la toma de decisiones y el respeto a sus derechos.
              </p>
              <div style={styles.cardFooter}>
                <span style={styles.cardFooterLine} />
                <span style={styles.cardFooterText}>Unidad sindical</span>
                <span style={styles.cardFooterLine} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documentos" style={{
        ...styles.documentsSection,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
      }}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>
              <span>◇</span> Recursos
            </div>
            <h2 style={styles.sectionTitle}>Documentos Oficiales</h2>
            <p style={styles.sectionDescription}>
              Descarga los documentos fundamentales de nuestra organización
            </p>
          </div>

          <div style={styles.documentsGrid}>
            {documents.map((doc) => (
              <a
                key={doc.id}
                href={doc.file}
                download
                style={{
                  ...styles.documentCard,
                  borderColor: hoveredDoc === doc.id ? '#2d3b2d' : 'rgba(45, 59, 45, 0.15)',
                  background: hoveredDoc === doc.id ? 'rgba(45, 59, 45, 0.02)' : '#f5f3ee'
                }}
                onMouseEnter={() => setHoveredDoc(doc.id)}
                onMouseLeave={() => setHoveredDoc(null)}
              >
                <div style={styles.documentIconWrapper}>
                  <span style={styles.documentEmoji}>{doc.icon}</span>
                </div>
                <div style={styles.documentInfo}>
                  <span style={styles.documentPeriod}>{doc.period}</span>
                  <h3 style={styles.documentTitle}>{doc.title}</h3>
                  <p style={styles.documentDescription}>{doc.description}</p>
                </div>
                <div style={styles.downloadBtn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7,10 12,15 17,10" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Descargar PDF</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{
        ...styles.quoteSection,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.8s ease 0.6s'
      }}>
        <div style={styles.quoteContainer}>
          <div style={styles.quoteVisual}>
            <div style={{...styles.cornerDecoration, ...styles.cornerTL}} />
            <div style={{...styles.cornerDecoration, ...styles.cornerTR}} />
            <div style={{...styles.cornerDecoration, ...styles.cornerBL}} />
            <div style={{...styles.cornerDecoration, ...styles.cornerBR}} />
            <blockquote style={styles.quote}>
              <span style={styles.quoteMark}>"</span>
              <p style={styles.quoteText}>
                Seguridad Social y Bienestar Económico de los Trabajadores
              </p>
              <span style={styles.quoteMarkEnd}>"</span>
            </blockquote>
            <cite style={styles.quoteAttribution}>
              — Lema del SNTSS
            </cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>
            <img 
              src="/files/logo_govis.png" 
              alt="Logo" 
              style={styles.footerLogoImage}
            />
          </div>
          <p style={styles.footerText}>
            Sindicato Nacional de Trabajadores del Seguro Social
          </p>
          <div style={styles.footerDivider} />
          <p style={styles.footerYear}>© 2025 · Todos los derechos reservados</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
          background: #f5f3ee;
          color: #1a1a1a;
          line-height: 1.6;
        }
        
        a:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f5f3ee',
    fontFamily: "'DM Sans', sans-serif"
  },
  
  // Navigation
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '1rem 3rem',
    background: '#f5f3ee',
    borderBottom: '1px solid rgba(45, 59, 45, 0.15)'
  },
  navContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none'
  },
  logoImage: {
    width: '40px',
    height: '40px',
    objectFit: 'contain'
  },
  logoText: {
    display: 'flex',
    flexDirection: 'column'
  },
  logoTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: '0.95rem',
    color: '#1a1a1a',
    letterSpacing: '-0.02em'
  },
  logoSubtitle: {
    fontSize: '0.7rem',
    color: '#8a8a8a',
    fontWeight: 400
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  navLink: {
    padding: '0.6rem 1.2rem',
    border: '1px solid rgba(45, 59, 45, 0.3)',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: 500,
    color: '#1a1a1a',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    background: 'transparent'
  },
  navLinkCta: {
    padding: '0.6rem 1.2rem',
    background: '#2d3b2d',
    color: '#f5f3ee',
    border: '1px solid #2d3b2d',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.2s ease'
  },
  
  // Hero
  hero: {
    minHeight: '100vh',
    background: '#f5f3ee',
    display: 'flex',
    alignItems: 'center',
    padding: '6rem 3rem 4rem'
  },
  heroContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  },
  heroVisual: {
    position: 'relative',
    width: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
    background: '#f5f3ee',
    border: '1px dashed rgba(45, 59, 45, 0.3)',
    padding: '4rem 2rem'
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto'
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    background: 'rgba(45, 59, 45, 0.08)',
    borderRadius: '50px',
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#2d3b2d',
    marginBottom: '1.5rem'
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 500,
    lineHeight: 1.1,
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#2d3b2d',
    marginBottom: '1.5rem',
    fontWeight: 400
  },
  heroDescription: {
    fontSize: '1rem',
    color: '#5a5a5a',
    lineHeight: 1.7,
    marginBottom: '2.5rem',
    maxWidth: '550px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  btnPrimary: {
    padding: '1rem 2rem',
    background: '#2d3b2d',
    color: '#f5f3ee',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none'
  },
  btnSecondary: {
    padding: '1rem 2rem',
    background: 'transparent',
    color: '#1a1a1a',
    border: '1px dashed rgba(45, 59, 45, 0.3)',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  
  // Corner decorations
  cornerDecoration: {
    position: 'absolute',
    width: '12px',
    height: '12px',
    borderColor: 'rgba(45, 59, 45, 0.3)',
    borderStyle: 'solid'
  },
  cornerTL: {
    top: '8px',
    left: '8px',
    borderWidth: '1px 0 0 1px'
  },
  cornerTR: {
    top: '8px',
    right: '8px',
    borderWidth: '1px 1px 0 0'
  },
  cornerBL: {
    bottom: '8px',
    left: '8px',
    borderWidth: '0 0 1px 1px'
  },
  cornerBR: {
    bottom: '8px',
    right: '8px',
    borderWidth: '0 1px 1px 0'
  },
  
  // Mission Section
  missionSection: {
    background: '#f5f3ee',
    padding: '6rem 3rem',
    borderTop: '1px solid rgba(45, 59, 45, 0.15)'
  },
  sectionContainer: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  sectionBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    background: 'rgba(45, 59, 45, 0.08)',
    borderRadius: '50px',
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#2d3b2d',
    marginBottom: '1rem'
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 500,
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  sectionDescription: {
    fontSize: '1rem',
    color: '#5a5a5a',
    maxWidth: '600px',
    margin: '0 auto'
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  card: {
    background: '#f5f3ee',
    border: '1px solid rgba(45, 59, 45, 0.15)',
    borderRadius: '16px',
    padding: '2.5rem',
    transition: 'all 0.3s ease'
  },
  cardIcon: {
    width: '48px',
    height: '48px',
    background: 'rgba(45, 59, 45, 0.08)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2d3b2d',
    marginBottom: '1.5rem'
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: '1rem'
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#5a5a5a',
    lineHeight: 1.8,
    marginBottom: '1.5rem'
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    paddingTop: '1.5rem',
    borderTop: '1px dashed rgba(45, 59, 45, 0.15)'
  },
  cardFooterLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(45, 59, 45, 0.15)'
  },
  cardFooterText: {
    fontSize: '0.75rem',
    color: '#8a8a8a',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  },
  
  // Documents Section
  documentsSection: {
    background: '#e8e4db',
    padding: '6rem 3rem'
  },
  documentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem'
  },
  documentCard: {
    background: '#f5f3ee',
    border: '1px solid rgba(45, 59, 45, 0.15)',
    borderRadius: '16px',
    padding: '2rem',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  documentIconWrapper: {
    width: '56px',
    height: '56px',
    background: 'rgba(45, 59, 45, 0.06)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  documentEmoji: {
    fontSize: '1.75rem'
  },
  documentInfo: {
    flex: 1
  },
  documentPeriod: {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#2d3b2d',
    background: 'rgba(45, 59, 45, 0.08)',
    padding: '0.25rem 0.75rem',
    borderRadius: '50px',
    letterSpacing: '0.05em',
    marginBottom: '0.75rem'
  },
  documentTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.35rem',
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: '0.5rem'
  },
  documentDescription: {
    fontSize: '0.9rem',
    color: '#8a8a8a',
    lineHeight: 1.6
  },
  downloadBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.25rem',
    background: '#2d3b2d',
    color: '#f5f3ee',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: 500,
    alignSelf: 'flex-start',
    transition: 'all 0.2s ease'
  },
  
  // Quote Section
  quoteSection: {
    background: '#f5f3ee',
    padding: '6rem 3rem',
    borderTop: '1px solid rgba(45, 59, 45, 0.15)'
  },
  quoteContainer: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  quoteVisual: {
    position: 'relative',
    border: '1px dashed rgba(45, 59, 45, 0.3)',
    borderRadius: '20px',
    padding: '4rem 3rem',
    textAlign: 'center'
  },
  quote: {
    position: 'relative'
  },
  quoteMark: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '4rem',
    color: '#2d3b2d',
    opacity: 0.3,
    lineHeight: 1,
    display: 'block',
    marginBottom: '-1rem'
  },
  quoteText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontStyle: 'italic',
    color: '#1a1a1a',
    lineHeight: 1.5,
    margin: 0
  },
  quoteMarkEnd: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '4rem',
    color: '#2d3b2d',
    opacity: 0.3,
    lineHeight: 1,
    display: 'block',
    marginTop: '-0.5rem'
  },
  quoteAttribution: {
    display: 'block',
    marginTop: '1.5rem',
    fontSize: '0.9rem',
    color: '#8a8a8a',
    fontStyle: 'normal',
    letterSpacing: '0.05em'
  },
  
  // Footer
  footer: {
    background: '#1a1a1a',
    padding: '4rem 3rem',
    textAlign: 'center'
  },
  footerContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  footerLogo: {
    marginBottom: '1.5rem'
  },
  footerLogoImage: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    opacity: 0.9
  },
  footerText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '1.25rem',
    color: '#f5f3ee',
    marginBottom: '1rem'
  },
  footerDivider: {
    width: '60px',
    height: '1px',
    background: 'rgba(245, 243, 238, 0.2)',
    margin: '1.5rem auto'
  },
  footerYear: {
    fontSize: '0.85rem',
    color: 'rgba(245, 243, 238, 0.5)'
  }
};
