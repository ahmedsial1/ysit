/**
 * YSIT Genuine Parts - Master Frontend Application Engine (Light Theme)
 * High-performance, reactive B2B automotive inquiry & RFQ system
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all platform modules
  initNavigation();
  initTriRegionHubs();
  initRfqEngine();
  initVehiclePlatforms();
  initProductSystems();
  initQualityLab();
  initLanguageSwitcher();
  initToastSystem();
  initQuoteModal();
  initLucideIcons();
});

/* ==========================================================================
   1. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const navLinks = document.querySelectorAll('.nav-anchor');
  const stickyNav = document.getElementById('mainNavbar');

  function openDrawer() {
    mobileDrawer.classList.remove('translate-x-full');
    drawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    drawerBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.add('translate-x-full');
    drawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
    drawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        closeDrawer();
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          const headerOffset = 80;
          const elementPosition = targetElem.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Sticky header background transition on scroll (Light Theme)
  window.addEventListener('scroll', () => {
    if (stickyNav) {
      if (window.scrollY > 30) {
        stickyNav.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur-md', 'border-b', 'border-slate-200');
        stickyNav.classList.remove('bg-white');
      } else {
        stickyNav.classList.remove('shadow-md');
        stickyNav.classList.add('bg-white');
      }
    }

    // Floating Back-to-Top Button
    const backToTop = document.getElementById('backToTopBtn');
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTop.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTop.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    }
  });

  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   2. TRI-REGION STRATEGIC ADVANTAGE EXPLORER
   ========================================================================== */
function initTriRegionHubs() {
  const hubCards = document.querySelectorAll('.hub-card');
  const hubDetailView = document.getElementById('hubActiveDetail');

  if (!hubCards.length || !hubDetailView) return;

  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      const hubId = card.getAttribute('data-hub-id');
      const hubData = window.YSIT_CATALOG?.hubs.find(h => h.id === hubId);
      if (!hubData) return;

      // Update active card styling
      hubCards.forEach(c => c.classList.remove('region-card-active', 'border-blue-700', 'bg-blue-50/50'));
      card.classList.add('region-card-active', 'border-blue-700');

      // Render detail view
      renderHubDetail(hubData);
    });
  });

  function renderHubDetail(hub) {
    const statsHtml = Object.entries(hub.stats).map(([k, v]) => `
      <div class="bg-white border border-slate-200 shadow-sm rounded-xl p-3.5">
        <div class="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">${k}</div>
        <div class="text-xs sm:text-sm font-black text-slate-900 mt-0.5">${v}</div>
      </div>
    `).join('');

    const entityHtml = hub.entity ? `
      <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold rounded-lg mb-2">
        <i data-lucide="building-2" class="w-3.5 h-3.5 text-blue-700"></i>
        <span>${hub.entity}</span>
      </div>
    ` : '';

    hubDetailView.innerHTML = `
      <div class="bg-gradient-to-r from-slate-50 via-white to-slate-50 border border-slate-200 shadow-sm rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 border border-blue-200 text-blue-800">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-700 animate-ping"></span>
                ${hub.badge}
              </span>
              ${entityHtml}
            </div>
            <h4 class="text-xl sm:text-2xl font-black text-slate-900">${hub.country} — ${hub.city}</h4>
            <p class="text-xs sm:text-sm text-slate-600 font-medium mt-1">${hub.role}</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="prefillRfqDestination('${hub.city}')" class="px-5 py-3 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all flex items-center gap-1.5 shadow-md">
              <span>Route Inquiry to this Hub</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
        
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">${hub.details}</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
          ${statsHtml}
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono-code">
          <div class="flex items-center gap-2">
            <span class="text-slate-400">Jurisdiction / Facility:</span>
            <span class="text-slate-800 font-semibold">${hub.address}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-slate-400">Direct Desk Dispatch:</span>
            <span class="text-blue-700 font-bold">${hub.contact}</span>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }

  // Preselect Korea on initial load
  const initialHub = window.YSIT_CATALOG?.hubs[0];
  if (initialHub) renderHubDetail(initialHub);
}

// Global helper to route from hub to RFQ
window.prefillRfqDestination = function(cityName) {
  const destInput = document.getElementById('rfqDestinationPort');
  if (destInput) {
    destInput.value = cityName;
    scrollToRfqDesk();
    showToast(`RFQ destination updated to: ${cityName}`, 'info');
  }
};

/* ==========================================================================
   3. DYNAMIC RFQ & PART INQUIRY ENGINE (Light Theme)
   ========================================================================== */
const rfqState = {
  activeTab: 'fast-search',
  parts: [
    {
      id: 1,
      oem: "58101-2VA50",
      desc: "Front Ceramic Brake Pad Set",
      model: "Hyundai Elantra (MD/AD)",
      qty: 200,
      unit: "Sets"
    },
    {
      id: 2,
      oem: "54500-C1000",
      desc: "Front Lower Suspension Arm LH",
      model: "Hyundai Sonata / Kia Optima",
      qty: 80,
      unit: "Pieces"
    }
  ],
  bulkFiles: [],
  destination: "Muscat / Sohar Port, Oman",
  freightType: "FCL - Full 20ft Container",
  customerName: "",
  customerCompany: "",
  customerPhone: "",
  customerEmail: "",
  customerCountry: "Oman / GCC"
};

function initRfqEngine() {
  const tabBtnFast = document.getElementById('tabBtnFastSearch');
  const tabBtnBulk = document.getElementById('tabBtnBulkUpload');
  const tabContentFast = document.getElementById('tabContentFastSearch');
  const tabContentBulk = document.getElementById('tabContentBulkUpload');

  // Tab switching
  if (tabBtnFast && tabBtnBulk) {
    tabBtnFast.addEventListener('click', () => switchRfqTab('fast-search'));
    tabBtnBulk.addEventListener('click', () => switchRfqTab('bulk-upload'));
  }

  function switchRfqTab(tabKey) {
    rfqState.activeTab = tabKey;
    if (tabKey === 'fast-search') {
      tabBtnFast.classList.add('bg-blue-700', 'text-white', 'shadow-md');
      tabBtnFast.classList.remove('text-slate-600', 'hover:text-slate-900', 'bg-slate-100');
      tabBtnBulk.classList.remove('bg-blue-700', 'text-white', 'shadow-md');
      tabBtnBulk.classList.add('text-slate-600', 'hover:text-slate-900', 'bg-slate-100');
      tabContentFast.classList.remove('hidden');
      tabContentBulk.classList.add('hidden');
    } else {
      tabBtnBulk.classList.add('bg-blue-700', 'text-white', 'shadow-md');
      tabBtnBulk.classList.remove('text-slate-600', 'hover:text-slate-900', 'bg-slate-100');
      tabBtnFast.classList.remove('bg-blue-700', 'text-white', 'shadow-md');
      tabBtnFast.classList.add('text-slate-600', 'hover:text-slate-900', 'bg-slate-100');
      tabContentBulk.classList.remove('hidden');
      tabContentFast.classList.add('hidden');
    }
  }

  // OEM Part Number Autocomplete & Quick Lookup
  const oemInput = document.getElementById('rfqOemNumber');
  const oemSuggestions = document.getElementById('oemSuggestionsBox');
  const partDescInput = document.getElementById('rfqPartDescription');
  const makeModelInput = document.getElementById('rfqMakeModel');
  const partQtyInput = document.getElementById('rfqPartQuantity');
  const addPartBtn = document.getElementById('btnAddPartToQuote');

  if (oemInput && oemSuggestions) {
    oemInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toUpperCase();
      if (query.length < 2) {
        oemSuggestions.classList.add('hidden');
        return;
      }

      const matches = window.YSIT_CATALOG?.samplePartNumbers.filter(p => 
        p.oem.toUpperCase().includes(query) || 
        p.name.toUpperCase().includes(query) ||
        p.models.toUpperCase().includes(query)
      ) || [];

      if (matches.length > 0) {
        oemSuggestions.innerHTML = matches.slice(0, 5).map(item => `
          <div class="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 transition-colors" data-oem="${item.oem}">
            <div class="flex items-center justify-between">
              <span class="font-mono-code font-bold text-blue-700 text-xs sm:text-sm">${item.oem}</span>
              <span class="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">${item.category}</span>
            </div>
            <div class="text-xs text-slate-900 font-bold mt-1">${item.name}</div>
            <div class="text-[11px] text-slate-500 mt-0.5">Fitment: ${item.models}</div>
          </div>
        `).join('');
        oemSuggestions.classList.remove('hidden');

        // Bind clicks on suggestions
        oemSuggestions.querySelectorAll('[data-oem]').forEach(row => {
          row.addEventListener('click', () => {
            const selectedOem = row.getAttribute('data-oem');
            const match = window.YSIT_CATALOG?.samplePartNumbers.find(p => p.oem === selectedOem);
            if (match) {
              oemInput.value = match.oem;
              if (partDescInput) partDescInput.value = match.name;
              if (makeModelInput) makeModelInput.value = match.models;
              oemSuggestions.classList.add('hidden');
            }
          });
        });
      } else {
        oemSuggestions.innerHTML = `
          <div class="p-3 text-xs text-slate-500">
            <span class="text-slate-800 font-mono-code font-semibold">${query}</span> not in quick-cache. You can still add any custom OEM/VIN number for factory quotation!
          </div>
        `;
        oemSuggestions.classList.remove('hidden');
      }
    });

    // Close suggestions on outside click
    document.addEventListener('click', (e) => {
      if (!oemInput.contains(e.target) && !oemSuggestions.contains(e.target)) {
        oemSuggestions.classList.add('hidden');
      }
    });
  }

  // Add Part to Basket
  if (addPartBtn) {
    addPartBtn.addEventListener('click', () => {
      const oem = oemInput.value.trim().toUpperCase();
      const desc = partDescInput.value.trim();
      const model = makeModelInput.value.trim();
      const qty = parseInt(partQtyInput.value) || 50;
      const unit = document.getElementById('rfqPartUnit')?.value || 'Pieces';

      if (!oem && !desc && !model) {
        showToast('Please enter an OEM Part Number, Description, or Vehicle Model.', 'error');
        oemInput.focus();
        return;
      }

      const newPart = {
        id: Date.now(),
        oem: oem || "OE-CUSTOM-SPEC",
        desc: desc || "Genuine Spec Assembly",
        model: model || "Hyundai/Kia Platform",
        qty: qty,
        unit: unit
      };

      rfqState.parts.push(newPart);
      renderPartsBasket();

      // Reset inputs
      oemInput.value = '';
      partDescInput.value = '';
      makeModelInput.value = '';
      partQtyInput.value = '100';
      showToast(`Added ${newPart.oem} to your OEM inquiry basket`, 'success');
    });
  }

  // Render initial parts list
  renderPartsBasket();

  // Drag & Drop Bulk File Uploader
  initBulkDropzone();

  // Form Submissions
  const btnWhatsAppFast = document.getElementById('btnSubmitWhatsAppFast');
  const btnEmailQuoteFast = document.getElementById('btnSubmitEmailFast');
  const btnWhatsAppBulk = document.getElementById('btnSubmitWhatsAppBulk');
  const btnEmailBulk = document.getElementById('btnSubmitEmailBulk');
  const btnDownloadTemplate = document.getElementById('btnDownloadRfqTemplate');

  if (btnWhatsAppFast) btnWhatsAppFast.addEventListener('click', () => submitRfqWhatsApp('fast'));
  if (btnEmailQuoteFast) btnEmailQuoteFast.addEventListener('click', () => submitRfqEmail('fast'));
  if (btnWhatsAppBulk) btnWhatsAppBulk.addEventListener('click', () => submitRfqWhatsApp('bulk'));
  if (btnEmailBulk) btnEmailBulk.addEventListener('click', () => submitRfqEmail('bulk'));
  if (btnDownloadTemplate) btnDownloadTemplate.addEventListener('click', generateRfqTemplateDownload);
}

function renderPartsBasket() {
  const container = document.getElementById('rfqPartsBasket');
  const countBadge = document.getElementById('rfqPartsCountBadge');
  const emptyNotice = document.getElementById('rfqBasketEmptyState');

  if (!container) return;

  if (countBadge) countBadge.textContent = `${rfqState.parts.length} ${rfqState.parts.length === 1 ? 'Part' : 'Parts'}`;

  if (rfqState.parts.length === 0) {
    if (emptyNotice) emptyNotice.classList.remove('hidden');
    container.innerHTML = '';
    return;
  }

  if (emptyNotice) emptyNotice.classList.add('hidden');

  container.innerHTML = rfqState.parts.map((p, idx) => `
    <div class="bg-white border border-slate-200 hover:border-slate-300 shadow-sm rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
      <div class="flex items-start gap-3">
        <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-mono-code font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
          ${idx + 1}
        </span>
        <div>
          <div class="flex flex-wrap items-center gap-2">
            <span class="font-mono-code text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">${p.oem}</span>
            <span class="text-xs sm:text-sm text-slate-900 font-bold">${p.desc}</span>
          </div>
          <div class="text-xs text-slate-500 mt-1 flex items-center gap-2">
            <span class="text-slate-400">Platform:</span>
            <span class="text-slate-700 font-medium">${p.model}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
        <div class="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200">
          <span class="text-xs text-slate-500">Qty:</span>
          <span class="text-xs font-bold text-slate-900 font-mono-code">${p.qty}</span>
          <span class="text-[11px] text-slate-500">${p.unit}</span>
        </div>
        <button onclick="removeRfqPart(${p.id})" class="text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors" title="Remove part">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

window.removeRfqPart = function(partId) {
  rfqState.parts = rfqState.parts.filter(p => p.id !== partId);
  renderPartsBasket();
  showToast('Part removed from inquiry list', 'info');
};

/* Bulk Dropzone Handler */
function initBulkDropzone() {
  const dropzone = document.getElementById('rfqDropzone');
  const fileInput = document.getElementById('rfqFileInput');
  const previewContainer = document.getElementById('rfqUploadedFilesList');

  if (!dropzone || !fileInput) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dropzone-active', 'border-blue-600');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dropzone-active', 'border-blue-600');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = Array.from(e.dataTransfer.files);
    handleUploadedFiles(files);
  });

  fileInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    handleUploadedFiles(files);
  });

  function handleUploadedFiles(files) {
    if (!files.length) return;
    
    files.forEach(file => {
      const validExtensions = ['.xlsx', '.xls', '.csv', '.pdf', '.png', '.jpg', '.jpeg', '.txt'];
      const fileExt = '.' + file.name.split('.').pop().toLowerCase();
      
      if (!validExtensions.includes(fileExt)) {
        showToast(`Invalid file format: ${file.name}. Please upload Excel, CSV, PDF, or image files.`, 'error');
        return;
      }

      if (file.size > 25 * 1024 * 1024) {
        showToast(`File ${file.name} exceeds 25MB limit.`, 'error');
        return;
      }

      rfqState.bulkFiles.push({
        id: Date.now() + Math.random(),
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: fileExt.replace('.', '').toUpperCase()
      });
    });

    renderBulkFiles();
    showToast(`Successfully uploaded ${files.length} bulk specification file(s)`, 'success');
  }

  function renderBulkFiles() {
    if (!previewContainer) return;

    if (rfqState.bulkFiles.length === 0) {
      previewContainer.innerHTML = '';
      return;
    }

    previewContainer.innerHTML = rfqState.bulkFiles.map(f => `
      <div class="flex items-center justify-between p-3 bg-white border border-slate-200 shadow-sm rounded-xl">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-mono-code font-bold text-blue-700">
            ${f.type}
          </div>
          <div>
            <div class="text-xs font-bold text-slate-900 max-w-xs truncate">${f.name}</div>
            <div class="text-[11px] text-slate-500">${f.size} • Ready for factory engineering quote</div>
          </div>
        </div>
        <button onclick="removeBulkFile(${f.id})" class="text-slate-400 hover:text-rose-600 p-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    `).join('');
  }

  window.removeBulkFile = function(fileId) {
    rfqState.bulkFiles = rfqState.bulkFiles.filter(f => f.id !== fileId);
    renderBulkFiles();
  };
}

/* WhatsApp Payload Formatter & Sender */
function submitRfqWhatsApp(source) {
  readCustomerInputs();

  const destination = document.getElementById('rfqDestinationPort')?.value || "Muscat / GCC Port";
  const containerType = document.getElementById('rfqContainerType')?.value || "FCL 20ft Container";
  const notes = document.getElementById('rfqAdditionalNotes')?.value || "Direct OEM specification requested.";

  let text = `*YSIT GENUINE PARTS (ysitkorea.com) - B2B DIRECT OEM RFQ INQUIRY*\n`;
  text += `═══════════════════════════════\n`;
  text += `📌 *CLIENT DETAILS:*\n`;
  text += `• Company / Buyer: ${rfqState.customerCompany || 'Commercial Wholesale Buyer'}\n`;
  text += `• Contact Person: ${rfqState.customerName || 'Procurement Officer'}\n`;
  text += `• Region / Country: ${rfqState.customerCountry || 'Oman / GCC / Global'}\n`;
  text += `• Destination Port: ${destination}\n`;
  text += `• Volume / Shipment: ${containerType}\n\n`;

  if (source === 'fast') {
    if (rfqState.parts.length === 0) {
      showToast('Please add at least one OEM part to your inquiry list.', 'error');
      return;
    }
    text += `📦 *REQUESTED OEM PART LIST (${rfqState.parts.length} Items):*\n`;
    rfqState.parts.forEach((p, i) => {
      text += `${i+1}. [${p.oem}] ${p.desc} | Model: ${p.model} | Qty: ${p.qty} ${p.unit}\n`;
    });
  } else {
    if (rfqState.bulkFiles.length === 0) {
      showToast('Please select or drag-and-drop a file list (.xlsx / .csv / .pdf).', 'error');
      return;
    }
    text += `📎 *BULK INQUIRY FILE ATTACHMENTS:*\n`;
    rfqState.bulkFiles.forEach((f, i) => {
      text += `${i+1}. ${f.name} (${f.size} - ${f.type})\n`;
    });
    text += `(Note: Bulk file list attached via WhatsApp)\n`;
  }

  text += `\n💬 *NOTES / REQUIREMENTS:*\n${notes}\n`;
  text += `═══════════════════════════════\n`;
  text += `_Sent via YSIT Korea OEM RFQ Engine • ysitkorea.com_`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/96891929355?text=${encodedText}`;
  
  window.open(whatsappUrl, '_blank');
  showToast('Opening WhatsApp Business Desk with pre-formatted OEM inquiry!', 'success');
}

/* Email RFQ Dispatch & Quote Modal Confirmation */
function submitRfqEmail(source) {
  readCustomerInputs();

  if (source === 'fast' && rfqState.parts.length === 0) {
    showToast('Please add at least one OEM part number before submitting.', 'error');
    return;
  }

  if (source === 'bulk' && rfqState.bulkFiles.length === 0) {
    showToast('Please upload an inquiry file before submitting.', 'error');
    return;
  }

  openQuoteModal(source);
}

function readCustomerInputs() {
  rfqState.customerName = document.getElementById('rfqCustomerName')?.value || "";
  rfqState.customerCompany = document.getElementById('rfqCustomerCompany')?.value || "";
  rfqState.customerPhone = document.getElementById('rfqCustomerPhone')?.value || "";
  rfqState.customerEmail = document.getElementById('rfqCustomerEmail')?.value || "";
  rfqState.customerCountry = document.getElementById('rfqCustomerCountry')?.value || "Oman / GCC";
}

function generateRfqTemplateDownload() {
  const csvContent = "data:text/csv;charset=utf-8," + 
    "OEM_Part_Number,Part_Description,Vehicle_Make_Model,Target_Quantity,Unit,Port_Of_Destination,Notes\n" +
    "58101-2VA50,Front Ceramic Brake Pad Set,Hyundai Elantra (MD/AD),200,Sets,Muscat Port Oman,OEM Korean Standard\n" +
    "54500-C1000,Front Lower Suspension Control Arm LH,Hyundai Sonata / Kia Optima,80,Pieces,Sohar Port Oman,Heavy duty ball joint\n" +
    "25310-D3000,Dual-Core Radiator Assembly,Hyundai Tucson 2.0L,50,Units,Jebel Ali Port UAE,High heat GCC spec\n" +
    "20910-2GA02,Full Engine Overhaul Gasket Kit,Kia Optima Theta II,100,Kits,Dammam Saudi Arabia,MLS Head Gasket\n";
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "YSIT_Genuine_Parts_Bulk_RFQ_Template.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Downloaded official YSIT Bulk RFQ CSV Template!', 'success');
}

/* ==========================================================================
   4. VEHICLE PLATFORM COVERAGE & INTERACTIVE FILTER (Light Theme)
   ========================================================================== */
function initVehiclePlatforms() {
  const filterBtns = document.querySelectorAll('.platform-filter-btn');
  const container = document.getElementById('platformCardsGrid');

  if (!container || !window.YSIT_CATALOG) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-platform-filter');
      filterBtns.forEach(b => {
        b.classList.remove('bg-blue-700', 'text-white', 'shadow-sm');
        b.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      btn.classList.add('bg-blue-700', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

      renderPlatformFleet(filter);
    });
  });

  function renderPlatformFleet(filter = 'all') {
    const platforms = window.YSIT_CATALOG.vehiclePlatforms;
    let filteredPlatforms = platforms;

    if (filter === 'hyundai') {
      filteredPlatforms = platforms.filter(p => p.brand.toLowerCase().includes('hyundai'));
    } else if (filter === 'kia') {
      filteredPlatforms = platforms.filter(p => p.brand.toLowerCase().includes('kia'));
    } else if (filter === 'expansion') {
      filteredPlatforms = platforms.filter(p => p.brand.toLowerCase().includes('expansion'));
    }

    container.innerHTML = filteredPlatforms.map(p => {
      const isExpansion = p.logoType === 'expansion';

      if (isExpansion) {
        return `
          <div class="col-span-1 lg:col-span-2 bg-gradient-to-r from-blue-50 via-white to-slate-50 border-2 border-dashed border-blue-300 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-700 text-white mb-3 shadow-sm">
                  <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  STRATEGIC EXPANSION LINE
                </div>
                <h3 class="text-2xl font-black text-slate-900 tracking-tight">Chinese Automotive Platforms Replacement Program</h3>
                <p class="text-slate-600 text-xs sm:text-sm max-w-2xl mt-1 font-normal">Expanding Tier-1 standard replacement engineering to the GCC's fastest growing vehicle segments with complete chassis, braking, and thermal systems.</p>
              </div>
              <button onclick="prefillExpansionRfq()" class="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                <span>Inquire Chinese OEM Line</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              ${p.models.map(m => `
                <div class="bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-400 hover:shadow-md transition-all">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-base font-black text-slate-900">${m.name}</span>
                    <span class="text-[10px] uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">OEM Focus</span>
                  </div>
                  <div class="text-xs text-slate-700 font-semibold">${m.series}</div>
                  <div class="text-[11px] text-slate-500 mt-2">Coverage: <span class="text-slate-800 font-medium">${m.focus}</span></div>
                  <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span class="text-emerald-600 font-bold flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      ${m.status}
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all group">
          <div>
            <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-slate-900 text-lg">
                  ${p.brand.slice(0, 1)}
                </div>
                <div>
                  <h3 class="text-xl font-black text-slate-900 tracking-tight">${p.brand} Platform Series</h3>
                  <p class="text-xs text-slate-500 font-medium">1:1 Korean OEM Dimensional Compliance</p>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-blue-700 border border-slate-200">${p.models.length} Key Fleets</span>
            </div>

            <div class="space-y-2.5 mb-6">
              ${p.models.map(m => `
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-bold text-slate-900">${m.name}</span>
                      <span class="text-xs font-mono-code text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200 font-semibold">${m.chassis}</span>
                      <span class="text-xs text-slate-400 font-medium">${m.years}</span>
                    </div>
                    <div class="text-xs text-slate-500 mt-0.5 font-medium">Engines: ${m.engines}</div>
                  </div>
                  <button onclick="prefillModelRfq('${p.brand} ${m.name}')" class="text-xs font-bold text-blue-700 hover:text-white bg-white hover:bg-blue-700 border border-blue-200 hover:border-blue-700 px-3 py-1.5 rounded-lg transition-colors self-start sm:self-auto flex items-center gap-1 shadow-sm">
                    <span>Inquire Part</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>High-volume container batches available</span>
            <button onclick="prefillModelRfq('${p.brand} All Models')" class="text-slate-900 font-bold hover:text-blue-700 flex items-center gap-1">
              <span>Full ${p.brand} RFQ</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Initial render
  renderPlatformFleet('all');
}

window.prefillModelRfq = function(modelName) {
  const modelInput = document.getElementById('rfqMakeModel');
  if (modelInput) {
    modelInput.value = modelName;
    scrollToRfqDesk();
    showToast(`Loaded ${modelName} into RFQ Desk`, 'info');
  }
};

window.prefillExpansionRfq = function() {
  const modelInput = document.getElementById('rfqMakeModel');
  const descInput = document.getElementById('rfqPartDescription');
  if (modelInput && descInput) {
    modelInput.value = "Chinese Platform (Geely / Chery / Haval / Changan / BYD)";
    descInput.value = "Full System OEM Replacement Inquiry";
    scrollToRfqDesk();
    showToast(`Loaded Chinese Platform Inquiry into RFQ Desk`, 'info');
  }
};

/* ==========================================================================
   5. CORE PRODUCT SYSTEMS VISUAL GRID & SPEC MODAL (Light Theme)
   ========================================================================== */
function initProductSystems() {
  const systemCards = document.querySelectorAll('.system-quick-inquire-btn');
  const specModal = document.getElementById('systemSpecModal');
  const specModalTitle = document.getElementById('systemSpecModalTitle');
  const specModalContent = document.getElementById('systemSpecModalContent');
  const closeSpecModalBtn = document.getElementById('closeSystemSpecModalBtn');

  // Wire buttons to pre-fill RFQ Desk
  systemCards.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      const descInput = document.getElementById('rfqPartDescription');
      if (descInput) {
        descInput.value = `${category} OEM Package`;
        scrollToRfqDesk();
        showToast(`Selected Category: ${category} for Hyundai & Kia`, 'info');
      }
    });
  });

  // Spec viewer buttons
  const viewSpecBtns = document.querySelectorAll('.view-system-specs-btn');
  viewSpecBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const systemId = btn.getAttribute('data-system-id');
      const sysData = window.YSIT_CATALOG?.productSystems.find(s => s.id === systemId);
      if (!sysData || !specModal) return;

      specModalTitle.textContent = sysData.title;
      specModalContent.innerHTML = `
        <div class="space-y-5">
          <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <h5 class="text-xs uppercase font-bold text-blue-700 tracking-wider mb-1.5">Technical Description</h5>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${sysData.shortDesc}</p>
          </div>

          <div>
            <h5 class="text-xs uppercase font-bold text-slate-500 tracking-wider mb-3">Key Assemblies & Components</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${sysData.components.map(c => `
                <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2 shadow-sm">
                  <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                  ${c}
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h5 class="text-xs uppercase font-bold text-slate-500 tracking-wider mb-3">Metallurgical & Engineering Standards</h5>
            <ul class="space-y-2">
              ${sysData.techSpecs.map(s => `
                <li class="text-xs text-slate-700 flex items-start gap-2 font-medium">
                  <svg class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${s}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
            <h5 class="text-xs uppercase font-bold text-blue-800 tracking-wider mb-1">20+ Year GCC Climate Advantage</h5>
            <p class="text-xs text-slate-700 leading-relaxed">${sysData.climateAdvantage}</p>
          </div>

          <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span class="text-xs font-mono-code text-slate-500 font-semibold">Sample OE Ref: ${sysData.featuredPart}</span>
            <button onclick="prefillSystemFromModal('${sysData.title}')" class="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all shadow-md">
              Inquire This System Now
            </button>
          </div>
        </div>
      `;

      specModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeSpecModalBtn && specModal) {
    closeSpecModalBtn.addEventListener('click', () => {
      specModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
}

window.prefillSystemFromModal = function(systemTitle) {
  const specModal = document.getElementById('systemSpecModal');
  if (specModal) specModal.classList.add('hidden');
  document.body.style.overflow = '';
  
  const descInput = document.getElementById('rfqPartDescription');
  if (descInput) {
    descInput.value = `${systemTitle} OEM Set`;
    scrollToRfqDesk();
    showToast(`Loaded ${systemTitle} into RFQ Desk`, 'info');
  }
};

/* ==========================================================================
   6. QUALITY & METALLURGICAL TESTING LAB (Light Theme)
   ========================================================================== */
function initQualityLab() {
  const labTabs = document.querySelectorAll('.quality-tab-btn');
  const labDisplay = document.getElementById('qualityLabDisplay');

  if (!labTabs.length || !labDisplay) return;

  const labDetails = {
    fitment: {
      title: "100% 1:1 OEM CAD Dimensional Fitment",
      subtitle: "Zero-Modification Plug & Play Korean Fleet Benchmark",
      metrics: [
        { label: "CMM Tolerance", val: "±0.02 mm" },
        { label: "Bolt-Hole Alignment", val: "100.0%" },
        { label: "Scan Method", val: "3D Laser CMM" }
      ],
      desc: "Every forging, casting, and stamped bracket is measured against genuine Mobis/Hyundai OEM master reference parts. Guarantees zero installation rework at the workshop level."
    },
    metallurgy: {
      title: "Metallurgical Spectroscopy & Tensile Hardness",
      subtitle: "High-Carbon & 40Cr Alloy Structural Integrity",
      metrics: [
        { label: "Tensile Strength", val: ">850 MPa" },
        { label: "Hardness Grade", val: "HRC 38-42" },
        { label: "Chemical Purity", val: "Optical Emission Spec" }
      ],
      desc: "Rigid testing of raw steel, ductile iron, and rubber poly-blends before machining. Anti-fatigue heat treatment ensures component integrity under continuous heavy loads."
    },
    climate: {
      title: "GCC 50°C+ Extreme Thermal & Desert Dust Chamber",
      subtitle: "Engineered for 20+ Years Oman & Gulf Resilience",
      metrics: [
        { label: "Ambient Tolerance", val: "-10°C to 115°C" },
        { label: "Salt Spray Anti-Corrosion", val: "500+ Hours" },
        { label: "Sand Ingress Rating", val: "Triple-Lip Seal" }
      ],
      desc: "Components undergo rigorous thermal shock cycling and pressurized sand abrasion blasting replicating harsh desert conditions in Muscat, Riyadh, and Dubai."
    },
    iatf: {
      title: "IATF 16949 & ISO 9001 Factory Floor Governance",
      subtitle: "Tier-1 Quality Management Protocols",
      metrics: [
        { label: "Batch Defect Rate", val: "<50 PPM" },
        { label: "Packaging Barrier", val: "VCI Anti-Rust" },
        { label: "Traceability", val: "Laser Barcoded" }
      ],
      desc: "Strict multi-stage production audits, robotic welding inspection, and sealed vapor-corrosion-inhibitor (VCI) export packing designed for trans-ocean container transport."
    }
  };

  labTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-lab-key');
      const data = labDetails[key];
      if (!data) return;

      labTabs.forEach(t => {
        t.classList.remove('bg-blue-700', 'text-white', 'shadow-sm');
        t.classList.add('bg-white', 'text-slate-700', 'border-slate-200');
      });
      tab.classList.add('bg-blue-700', 'text-white', 'shadow-sm');
      tab.classList.remove('bg-white', 'text-slate-700', 'border-slate-200');

      labDisplay.innerHTML = `
        <div class="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
            <div>
              <span class="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">YSIT Verification Protocol</span>
              <h4 class="text-xl font-black text-slate-900 mt-1">${data.title}</h4>
              <p class="text-xs text-slate-500 font-medium">${data.subtitle}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 self-start sm:self-auto flex items-center gap-1.5 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Passed Tier-1 Lab Test
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">${data.desc}</p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            ${data.metrics.map(m => `
              <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div class="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">${m.label}</div>
                <div class="text-xl font-black font-mono mt-1 text-blue-700">${m.val}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    });
  });
}

/* ==========================================================================
   7. LANGUAGE SWITCHER & INTERNATIONALIZATION SIMULATOR
   ========================================================================== */
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-select-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      const langName = lang === 'ko' ? '한국어 (Korean)' : lang === 'ar' ? 'العربية (Arabic)' : 'English (Global)';
      
      langBtns.forEach(b => b.classList.remove('text-blue-700', 'font-bold'));
      btn.classList.add('text-blue-700', 'font-bold');

      if (lang === 'ar') {
        showToast(`Language set to ${langName}. OEM RFQ forms support Arabic procurement requests.`, 'info');
      } else if (lang === 'ko') {
        showToast(`언어가 ${langName}로 설정되었습니다. 한국 본사 엔지니어링 데스크로 연결됩니다.`, 'info');
      } else {
        showToast(`Language set to ${langName}.`, 'info');
      }
    });
  });
}

/* ==========================================================================
   8. QUOTE PREVIEW & EXPORT MODAL (Light Theme)
   ========================================================================== */
function initQuoteModal() {
  const modal = document.getElementById('quotePreviewModal');
  const closeBtn = document.getElementById('closeQuoteModalBtn');
  const printBtn = document.getElementById('btnPrintQuoteSheet');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openQuoteModal(source) {
  const modal = document.getElementById('quotePreviewModal');
  const quoteBody = document.getElementById('quoteModalBody');
  const quoteRefNumber = document.getElementById('quoteRefNumber');

  if (!modal || !quoteBody) return;

  const quoteId = `YSIT-RFQ-${Date.now().toString().slice(-6)}`;
  if (quoteRefNumber) quoteRefNumber.textContent = quoteId;

  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const dest = document.getElementById('rfqDestinationPort')?.value || "Muscat / Sohar Port, Oman";
  const freight = document.getElementById('rfqContainerType')?.value || "FCL 20ft Container";

  let itemsHtml = '';
  if (source === 'fast') {
    itemsHtml = `
      <table class="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-100 text-slate-700 font-bold uppercase">
          <tr>
            <th class="p-3">Item</th>
            <th class="p-3 font-mono-code">OEM Part No.</th>
            <th class="p-3">Description</th>
            <th class="p-3">Platform Fitment</th>
            <th class="p-3 text-right font-mono-code">Target Qty</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-slate-800 bg-white">
          ${rfqState.parts.map((p, i) => `
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="p-3 font-semibold">${i + 1}</td>
              <td class="p-3 font-mono-code font-bold text-blue-700">${p.oem}</td>
              <td class="p-3 font-bold">${p.desc}</td>
              <td class="p-3 text-slate-600">${p.model}</td>
              <td class="p-3 text-right font-mono-code font-bold">${p.qty} ${p.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else {
    itemsHtml = `
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
        <div class="text-xs uppercase font-bold text-slate-500 mb-2">Attached Specification Files (${rfqState.bulkFiles.length}):</div>
        <ul class="space-y-1.5">
          ${rfqState.bulkFiles.map(f => `
            <li class="text-xs text-slate-800 font-medium flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200">
              <span class="font-bold">${f.name}</span>
              <span class="font-mono-code text-slate-500">${f.size}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  quoteBody.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs">
        <div>
          <span class="text-slate-500 uppercase font-bold">Inquirer / Buyer:</span>
          <div class="text-sm font-black text-slate-900 mt-0.5">${rfqState.customerCompany || 'Wholesale Buyer'}</div>
          <div class="text-slate-600 mt-0.5">${rfqState.customerName || 'Procurement Desk'} • ${rfqState.customerEmail || 'sales@company.com'}</div>
          <div class="text-slate-500 font-mono mt-0.5">${rfqState.customerPhone || '+968 / +82 Contact'}</div>
        </div>
        <div class="sm:text-right">
          <span class="text-slate-500 uppercase font-bold">Delivery Logistics:</span>
          <div class="text-sm font-black text-slate-900 mt-0.5">${dest}</div>
          <div class="text-slate-600 mt-0.5">Shipment Mode: ${freight}</div>
          <div class="text-emerald-600 font-bold mt-0.5">Guaranteed Response within 24h</div>
        </div>
      </div>

      <div>
        <div class="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2">Quotation Specifications</div>
        ${itemsHtml}
      </div>

      <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-slate-700 flex items-center justify-between">
        <span class="font-medium">Korean OEM CAD & Metallurgical Compliance Guaranteed.</span>
        <span class="font-bold text-slate-900">Date: ${dateStr}</span>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  showToast('Generated Official YSIT OEM Quotation Document!', 'success');
}

/* ==========================================================================
   9. TOAST NOTIFICATION SYSTEM (Light Theme)
   ========================================================================== */
function initToastSystem() {
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColor = type === 'error' ? 'bg-red-50 border-red-300 text-red-800' :
                  type === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-800' :
                  'bg-white border-slate-200 text-slate-800';

  const icon = type === 'error' ? '⚠️' : type === 'success' ? '✓' : 'ℹ️';

  toast.className = `${bgColor} border px-4 py-3 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2.5 transform transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto max-w-md`;
  toast.innerHTML = `
    <span class="text-sm">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 4000);
}

function scrollToRfqDesk() {
  const rfqElem = document.getElementById('rfqDeskSection') || document.getElementById('rfq-desk');
  if (rfqElem) {
    const headerOffset = 70;
    const elementPosition = rfqElem.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
