import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from '../ui/Button';
import AnimatedText from '../ui/AnimatedText';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfWidth, setPdfWidth] = useState(0);
  const resumeUrl = '/Chirag_Sharma_Resume.pdf';

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Chirag_Sharma_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const updatePdfWidth = () => {
      const vw = window.innerWidth;
      // Use 90% width for small screens and 70% for larger screens
      const width = Math.min(vw * (vw < 640 ? 0.9 : 0.7), 700);
      setPdfWidth(width);
    };

    updatePdfWidth();
    window.addEventListener('resize', updatePdfWidth);
    return () => window.removeEventListener('resize', updatePdfWidth);
  }, []);

  return (
    <section id="resume" className="section-container bg-background-primary py-12 sm:py-16">
      <div className="container-custom mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            <AnimatedText text="My Resume" />
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base mt-3">
            <AnimatedText 
              text="Get a detailed overview of my skills, experience, and qualifications"
              delay={0.1}
            />
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div
            className="glass-panel p-4 sm:p-6 md:p-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Chirag Sharma - Resume</h3>
                <p className="text-text-secondary text-sm sm:text-base">Computer Science Engineer</p>
              </div>
              
              <Button
                variant="primary"
                icon={<Download size={16} className="sm:w-[18px] sm:h-[18px]" />}
                onClick={handleDownload}
                className="mt-4 md:mt-0 text-sm sm:text-base"
              >
                {isLoading ? 'Downloading...' : 'Download Resume'}
              </Button>
            </div>

            {/* Scrollable PDF Container */}
            <div className="bg-background-tertiary rounded-lg p-3 sm:p-4 h-[50vh] overflow-y-auto flex justify-center mb-4 sm:mb-6">
              <Document
                file={resumeUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="text-center">
                    <p className="text-text-secondary">Loading PDF...</p>
                  </div>
                }
                error={
                  <div className="text-center">
                    <p className="text-text-secondary">Failed to load PDF. Please try downloading instead.</p>
                  </div>
                }
              >
                <Page 
                  pageNumber={pageNumber} 
                  width={pdfWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-lg"
                />
              </Document>
            </div>

            {numPages && (
              <div className="flex justify-center gap-2 mb-4">
                <Button
                  variant="secondary"
                  onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                  className={pageNumber <= 1 ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  Previous
                </Button>
                <span className="flex items-center text-text-secondary">
                  Page {pageNumber} of {numPages}
                </span>
                <Button
                  variant="secondary"
                  onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                  className={pageNumber >= numPages ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  Next
                </Button>
              </div>
            )}

            <div className="text-center">
              <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base">
                For a more interactive experience, you can also check out my:
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a 
                  href="https://github.com/chiraagsharma24" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:underline text-sm sm:text-base"
                >
                  GitHub Profile
                </a>
                <a 
                  href="https://www.linkedin.com/in/chirag-sharma-365703226" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:underline text-sm sm:text-base"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
