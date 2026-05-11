import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Specialties from './components/Specialties';
import Equipment from './components/Equipment';
import Education from './components/Education';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import TechnologyDetail from './components/TechnologyDetail';
import SpecialtyDetail from './components/SpecialtyDetail';
import EquipmentCatalog from './components/EquipmentCatalog';
import EquipmentDetail from './components/EquipmentDetail';
import MediaCenter from './components/MediaCenter';
import ContactPage from './components/ContactPage';
import PatientEducationHub from './components/PatientEducationHub';
import EducationArticlePage from './components/EducationArticlePage';
import BlogPage from './components/BlogPage';
import BlogDetailPage from './components/BlogDetailPage';
import FAQPage from './components/FAQPage';
import { laparoscopyData, endoscopyData, roboticsData, energyDevicesData, imagingData } from './data/mockTechnology';
import { blogPostsData } from './data/mockBlog';
import { thyroidData, neurologyData, orthopedicsData, cardiologyData, generalSurgeryData, breastSurgeryData } from './data/mockSpecialty';
import { equipmentCatalogData } from './data/mockEquipment';
import { articlesData } from './data/mockArticles';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (currentPage.includes('#')) {
      const [path, hash] = currentPage.split('#');
      if (path === 'home') {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const renderPage = () => {
    const basePage = currentPage.split('#')[0];

    if (basePage === 'home') {
      return (
        <>
          <Hero onNavigate={setCurrentPage} />
          <Technologies onNavigate={setCurrentPage} />
          <Specialties onNavigate={setCurrentPage} />
          <Equipment onNavigate={setCurrentPage} />
          <Education onNavigate={setCurrentPage} />
          <About />
          <ContactCTA onNavigate={setCurrentPage} />
        </>
      );
    }

    if (currentPage === 'tech-laparoscopy') {
      return <TechnologyDetail data={laparoscopyData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'tech-endoscopy') {
      return <TechnologyDetail data={endoscopyData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'tech-robotics') {
      return <TechnologyDetail data={roboticsData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'tech-energy') {
      return <TechnologyDetail data={energyDevicesData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'tech-imaging') {
      return <TechnologyDetail data={imagingData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'specialty-thyroid') {
      return <SpecialtyDetail data={thyroidData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'specialty-neurology') {
      return <SpecialtyDetail data={neurologyData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'specialty-orthopedics') {
      return <SpecialtyDetail data={orthopedicsData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'specialty-cardiology') {
      return <SpecialtyDetail data={cardiologyData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'specialty-general-surgery') {
      return <SpecialtyDetail data={generalSurgeryData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'specialty-breast-surgery') {
      return <SpecialtyDetail data={breastSurgeryData} onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'catalog') {
      return <EquipmentCatalog onNavigate={setCurrentPage} />;
    }

    if (currentPage === 'media') {
      return <MediaCenter />;
    }

    if (currentPage === 'patient-education') {
      return <PatientEducationHub onNavigate={setCurrentPage} />;
    }

    if (currentPage.startsWith('article-')) {
      const articleId = currentPage.replace('article-', '');
      const article = articlesData[articleId];
      if (article) {
        return <EducationArticlePage article={article} onBack={() => setCurrentPage('patient-education')} />;
      }
    }

    if (currentPage === 'blog') {
      return <BlogPage onNavigate={setCurrentPage} />;
    }

    if (currentPage.startsWith('blog-detail-')) {
      const postId = currentPage.replace('blog-detail-', '');
      const post = blogPostsData.find(p => p.id === postId);
      if (post) {
        return <BlogDetailPage post={post} onBack={() => setCurrentPage('blog')} onNavigate={setCurrentPage} />;
      }
    }

    if (currentPage === 'faq') {
      return <FAQPage />;
    }

    if (currentPage === 'contact') {
      return <ContactPage />;
    }

    if (currentPage.startsWith('equipment-')) {
      const eqId = currentPage.replace('equipment-', '');
      const eqData = equipmentCatalogData.find(e => e.id === eqId);
      if (eqData) {
        return <EquipmentDetail data={eqData} onBack={() => setCurrentPage('catalog')} onNavigate={setCurrentPage} />;
      }
    }

    return (
      <div className="pt-32 pb-24 text-center min-h-screen">
        <h2 className="text-2xl font-bold text-dark-grey-900">Page under construction</h2>
        <button
          onClick={() => setCurrentPage('home')}
          className="mt-4 text-maroon-600 font-medium hover:underline"
        >
          Return Home
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-maroon-500 selection:text-white">
      <Header
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        forceSolid={currentPage !== 'home'}
      />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
