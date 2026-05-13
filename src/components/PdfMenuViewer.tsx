import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Minimize, Loader2 } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfMenuViewerProps {
  file: string;
}

export const PdfMenuViewer: React.FC<PdfMenuViewerProps> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => Math.min(Math.max(1, prevPageNumber + offset), numPages || 1));
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));

  const toggleFullscreen = () => {
    const el = document.getElementById('pdf-viewer-container');
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => console.error(err));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(err => console.error(err));
    }
  };

  return (
    <div id="pdf-viewer-container" className={`flex flex-col items-center w-full glass rounded-xl overflow-hidden transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-[100] h-[100dvh] justify-center bg-[#050505]' : 'relative'}`}>
      
      {/* Toolbar */}
      <div className="w-full bg-[#050505]/80 backdrop-blur-md p-3 flex justify-between items-center border-b border-white/10 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/5">
            <button onClick={() => changePage(-1)} disabled={pageNumber <= 1} className="p-2 text-white/50 hover:text-tony-pink disabled:opacity-30 transition-colors" aria-label="Previous Page">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-white text-sm font-display font-bold min-w-[3rem] text-center tracking-[2px]">
              {pageNumber} <span className="opacity-50">/</span> {numPages || '-'}
            </span>
            <button onClick={() => changePage(1)} disabled={pageNumber >= (numPages || 1)} className="p-2 text-white/50 hover:text-tony-pink disabled:opacity-30 transition-colors" aria-label="Next Page">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 mr-2 border border-white/5">
            <button onClick={handleZoomOut} disabled={scale <= 0.5} className="p-2 text-white/50 hover:text-tony-blue disabled:opacity-30 transition-colors" aria-label="Zoom Out">
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-white text-xs font-display font-light w-12 text-center opacity-80">{Math.round(scale * 100)}%</span>
            <button onClick={handleZoomIn} disabled={scale >= 2.5} className="p-2 text-white/50 hover:text-tony-blue disabled:opacity-30 transition-colors" aria-label="Zoom In">
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
          
          <button onClick={toggleFullscreen} className="p-2 bg-white/5 text-white/50 hover:text-white border border-white/5 hover:bg-white/10 rounded-lg transition-colors" aria-label="Toggle Fullscreen">
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* PDF Viewer Area */}
      <div className={`w-full overflow-auto flex-1 flex flex-col items-center justify-start ${isFullscreen ? 'h-full max-h-[100dvh] p-4 pb-12 bg-[#050505]' : 'min-h-[500px] max-h-[700px] p-4 bg-black/20'}`}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex flex-col flex-1 h-full min-h-[400px] items-center justify-center text-tony-pink">
              <Loader2 className="w-10 h-10 animate-spin mb-4 drop-shadow-[0_0_15px_rgba(255,31,191,0.5)]" />
              <p className="text-sm font-display tracking-[4px] text-white/50 uppercase">Загрузка меню...</p>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center p-10 min-h-[400px] text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                 <span className="text-white/30 text-xl font-display">PDF</span>
              </div>
              <p className="text-white/50 mb-2 font-display tracking-[2px] uppercase text-sm">Файл меню не найден</p>
              <p className="text-xs text-white/30 truncate max-w-xs">{file}</p>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale} 
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-[0_0_30px_rgba(0,0,0,0.8)] mx-auto rounded-md overflow-hidden bg-white"
          />
        </Document>
      </div>
    </div>
  );
};
