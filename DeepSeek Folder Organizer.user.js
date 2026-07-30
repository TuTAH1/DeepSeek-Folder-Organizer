// ==UserScript==
// @name         DeepSeek Folder Organizer
// @namespace    http://tampermonkey.net/
// @version      4.9
// @description  Advanced folder organization for DeepSeek conversations (folders in left sidebar)
// @author       Gzyms69, T-TaaN, GPTs
// @match        https://chat.deepseek.com/*
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23581D9F" stroke="%237B3DC4" stroke-width="0.5" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><g transform="translate(5,8) scale(0.5)"><path fill="%234285f4" d="M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6385 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932679 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7724 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z"/></g></svg>
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// ==/UserScript==

(function () {
	'use strict';

	// --------------------------------------------------------------
	// Storage keys
	// --------------------------------------------------------------
	const FOLDERS_KEY = 'deepseek_folders';
	const ASSIGNMENTS_KEY = 'deepseek_assignments';
	const SETTINGS_KEY = 'deepseek_settings';

	// --------------------------------------------------------------
	// Available icons (SVG markup) for folder customization
	// --------------------------------------------------------------
	const AVAILABLE_ICONS = [
		// Folder icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M2 8h20"/></svg>',
		// File/document icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
		// Category icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
		// Code/tech icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>',
		// Star/favorite icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
		// Learning/education icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m4 19 8-8"/><path d="m20 5-8 8"/><path d="m15 4 5 5"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
		// Personal icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
		// Work icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>',
		// Miscellaneous icons
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06-.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/></svg>',
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'
	];

	// --------------------------------------------------------------
	// Available folder accent colors
	// --------------------------------------------------------------
	const AVAILABLE_COLORS = ['#10a37f', '#4285f4', '#ea4335', '#fbbc04', '#34a853', '#7b7b7b', '#a142f4', '#f442d7', '#42f4e8', '#f4a142'];

	// --------------------------------------------------------------
	// Global state
	// --------------------------------------------------------------
	// Track which folders are expanded (showing conversations inside)
	let expandedFolders = new Set();
	let foldersContainer = null;
	let observer = null;
	let isInternalUpdate = false;

	// --------------------------------------------------------------
	// Initialize storage with empty values if not set
	// --------------------------------------------------------------
	function initializeStorage() {
		if (!GM_getValue(FOLDERS_KEY)) {
			GM_setValue(FOLDERS_KEY, []);
		}
		if (!GM_getValue(ASSIGNMENTS_KEY)) {
			GM_setValue(ASSIGNMENTS_KEY, {});
		}
		if (!GM_getValue(SETTINGS_KEY)) {
			GM_setValue(SETTINGS_KEY, {
				showFolderTags: true,
				autoCategorize: false,
				sidebarWidth: '220'
			});
		}
	}

	function init() {
		initializeStorage();
		addFoldersSection();
		setupMutationObserver();
		setTimeout(updateFolderCounts, 1000);
	}

	// --------------------------------------------------------------
	// Watch for changes in the conversation list
	// --------------------------------------------------------------
	function setupMutationObserver() {
		if (observer) observer.disconnect();
		const target = document.querySelector('div[class*="_5a8ac7a"]')?.parentElement;
		if (!target) return setTimeout(setupMutationObserver, 1000);

		observer = new MutationObserver(() => {
			if (isInternalUpdate) return;
			setTimeout(() => {
				if (!isInternalUpdate) updateFolderCounts();
			}, 600);
		});
		observer.observe(target, { childList: true, subtree: true });
	}

	// --------------------------------------------------------------
	// Insert the "Folders" header and folder list into the left sidebar
	// --------------------------------------------------------------
	function addFoldersSection() {
		if (document.querySelector('.ds-folders-section')) return;

		const firstConv = document.querySelector('a[class*="_546d736"]');
		if (!firstConv) return setTimeout(addFoldersSection, 800);

		const section = document.createElement('div');
		section.className = 'ds-folders-section';
		section.style.cssText = 'border-bottom:1px solid #565869; padding:8px 0 4px; margin-bottom:8px;';

		section.innerHTML = `
			<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0 8px;">
				<span style="color:#8e8ea0;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Folders</span>
				<button class="ds-add-folder-btn" style="background:none;border:none;color:#8e8ea0;cursor:pointer;padding:2px 6px;border-radius:4px;font-size:18px;">+</button>
			</div>
			<div class="ds-folders-list" style="display:flex;flex-direction:column;gap:6px;"></div>
		`;

		firstConv.parentNode.insertBefore(section, firstConv);
		foldersContainer = section.querySelector('.ds-folders-list');

		section.querySelector('.ds-add-folder-btn').addEventListener('click', e => {
			e.stopPropagation();
			showAddFolderModal();
		});

		renderFolders();
	}

	// --------------------------------------------------------------
	// Refresh the entire folder list (used after changes)
	// --------------------------------------------------------------
	function renderFolders() {
		if (!foldersContainer) return;
		foldersContainer.innerHTML = '';
		GM_getValue(FOLDERS_KEY, []).forEach(f => foldersContainer.appendChild(createFolderElement(f)));
		updateFolderCounts();
	}

	// --------------------------------------------------------------
	// Create a single folder entry (header + optional expanded child list)
	// --------------------------------------------------------------
	function createFolderElement(folder) {
		const isExpanded = expandedFolders.has(folder.id);
		const div = document.createElement('div');
		div.className = 'ds-folder-entry';
		div.dataset.folderId = folder.id;

		// Обводка + слабая тень по умолчанию
		div.style.cssText = `
		border: 2px solid ${folder.color}60;
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.25s ease;
		box-shadow: 0 0 0 2px ${folder.color}12;
	`;

		const header = document.createElement('div');
		header.style.cssText = `
		display:flex; align-items:center; gap:8px;
		padding:10px 10px;
		cursor:pointer; color:${folder.color}; font-size:14px; line-height:22px;
		transition: background 0.2s;
	`;
		header.innerHTML = `
		<span class="arrow" style="transition:transform .2s; transform:rotate(${isExpanded ? '90deg' : '0deg'}); width:16px;">
			<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
		</span>
		<span style="width:18px;height:18px;">${folder.icon}</span>
		<span style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${folder.name}</span>
		<span class="count" style="background:#565869;color:#8e8ea0;padding:1px 7px;border-radius:999px;font-size:11px;min-width:18px;text-align:center;">0</span>
	`;
				// ПКМ меню
		header.addEventListener('contextmenu', e => {
			e.preventDefault();
			e.stopPropagation();
			showFolderContextMenu(e, folder);
		});

		const children = document.createElement('div');
		children.className = 'children';
		children.style.cssText = `display:${isExpanded ? 'block' : 'none'}; background:${folder.color}1A; padding:6px 0;`;

		const applyGlow = (active) => {
			if (active) {
				div.style.boxShadow = `0 0 0 3px ${folder.color}35, 0 0 16px ${folder.color}45`;
				div.style.borderColor = `${folder.color}A0`;
			} else {
				div.style.boxShadow = `0 0 0 2px ${folder.color}12`;
				div.style.borderColor = `${folder.color}60`;
			}
		};

		// Hover на header
		header.addEventListener('mouseenter', () => {
			header.style.background = 'rgba(255,255,255,0.06)';
			applyGlow(true);
		});
		header.addEventListener('mouseleave', () => {
			header.style.background = '';
			applyGlow(false);
		});

		// Hover на диалогах внутри
		const addChildListeners = () => {
			children.querySelectorAll('a').forEach(link => {
				link.addEventListener('mouseenter', () => applyGlow(true));
				link.addEventListener('mouseleave', () => applyGlow(false));
			});
		};

		header.addEventListener('click', e => {
			e.stopImmediatePropagation();
			const willExpand = !expandedFolders.has(folder.id);
			if (willExpand) expandedFolders.add(folder.id);
			else expandedFolders.delete(folder.id);

			header.querySelector('.arrow').style.transform = `rotate(${willExpand ? '90deg' : '0deg'})`;
			children.style.display = willExpand ? 'block' : 'none';
			if (willExpand) {
				populateChildList(children, folder);
				setTimeout(addChildListeners, 50);
			}
		});

		div.append(header, children);
		return div;
	}

	// --------------------------------------------------------------
	// Show right-click context menu for a folder
	// --------------------------------------------------------------
	function showFolderContextMenu(e, folder) {
		hideContextMenu();

		const menu = document.createElement('div');
		menu.className = 'ds-context-menu';
		menu.style.cssText = `
		position:fixed; top:${e.clientY}px; left:${e.clientX}px;
		background:#343541; border:1px solid #565869; border-radius:8px;
		padding:8px 0; z-index:1002; min-width:190px; box-shadow:0 6px 20px rgba(0,0,0,0.4);
	`;

		const items = [
			{ text: 'Переименовать', action: () => showFolderMenu(folder, 'rename') },
			{ text: 'Изменить иконку и цвет', action: () => showFolderMenu(folder, 'customize') },
			{ text: 'Управление диалогами', action: () => showManageFolderModal(folder) },
			{ separator: true },
			{ text: 'Удалить папку', action: () => deleteFolder(folder), danger: true }
		];

		items.forEach(item => {
			if (item.separator) {
				const sep = document.createElement('div');
				sep.style.cssText = 'height:1px; background:#565869; margin:6px 0;';
				menu.appendChild(sep);
			} else {
				const mi = document.createElement('div');
				mi.style.cssText = `padding:9px 16px; cursor:pointer; font-size:14px; color:${item.danger ? '#ef4444' : '#ececf1'};`;
				mi.textContent = item.text;
				mi.addEventListener('mouseenter', () => mi.style.background = 'rgba(255,255,255,0.1)');
				mi.addEventListener('mouseleave', () => mi.style.background = '');
				mi.addEventListener('click', ev => {
					ev.stopPropagation();
					item.action();
					menu.remove();
				});
				menu.appendChild(mi);
			}
		});

		document.body.appendChild(menu);

		const close = (ev) => {
			if (!menu.contains(ev.target)) {
				menu.remove();
				document.removeEventListener('click', close);
			}
		};
		setTimeout(() => document.addEventListener('click', close), 10);
	}

	function hideContextMenu() {
		document.querySelectorAll('.ds-context-menu').forEach(m => m.remove());
	}

	// --------------------------------------------------------------
	// Delete a folder (with confirmation)
	// --------------------------------------------------------------
	function deleteFolder(folder) {
		if (!confirm(`Удалить папку "${folder.name}"?`)) return;

		let folders = GM_getValue(FOLDERS_KEY, []);
		folders = folders.filter(f => f.id !== folder.id);
		GM_setValue(FOLDERS_KEY, folders);

		const assignments = GM_getValue(ASSIGNMENTS_KEY, {});
		Object.keys(assignments).forEach(id => {
			if (assignments[id] === folder.id) delete assignments[id];
		});
		GM_setValue(ASSIGNMENTS_KEY, assignments);

		expandedFolders.delete(folder.id);
		isInternalUpdate = true;
		renderFolders();
		isInternalUpdate = false;
	}

	// --------------------------------------------------------------
	// Populate child conversations inside expanded folder
	// --------------------------------------------------------------
	function populateChildList(container, folder) {
		container.innerHTML = '';
		const convs = getConversations();
		const assignments = GM_getValue(ASSIGNMENTS_KEY, {});
		const inFolder = convs.filter(c => assignments[c.id] === folder.id);

		if (inFolder.length === 0) {
			const empty = document.createElement('div');
			empty.textContent = 'Нет диалогов';
			empty.style.cssText = 'color:#8e8ea0; padding:12px 12px; font-size:13px;';
			container.appendChild(empty);
			return;
		}

		inFolder.forEach(conv => {
			const a = document.createElement('a');
			a.href = conv.url || `/chat/${conv.id}`;
			a.style.cssText = `
			display:flex; align-items:center;
			padding:9px 12px;
			border-radius:8px;
			color:#ececf1;
			font-size:14px; line-height:22px;
			margin:2px 6px; text-decoration: none; transition:background .15s;
		`;
			a.textContent = conv.title;
			a.addEventListener('mouseenter', () => a.style.background = 'rgba(255,255,255,0.08)');
			a.addEventListener('mouseleave', () => a.style.background = '');
			container.appendChild(a);
		});
	}

	// --------------------------------------------------------------
	// Refresh folder counts after assignments change
	// --------------------------------------------------------------
	function updateFolderCounts() {
		const assignments = GM_getValue(ASSIGNMENTS_KEY, {});
		document.querySelectorAll('.ds-folder-entry').forEach(entry => {
			const id = entry.dataset.folderId;
			const count = Object.values(assignments).filter(x => x === id).length;
			const el = entry.querySelector('.count');
			if (el) el.textContent = count || '0';
		});
	}

	// --------------------------------------------------------------
	// Helper: get all conversations from the DOM
	// --------------------------------------------------------------
	function getConversations() {
		return Array.from(document.querySelectorAll('a[class*="_546d736"], a[href^="/chat/"]')).map(link => ({
			id: link.href.split('/').pop() || link.getAttribute('href'),
			title: (link.querySelector('[class*="title"], .c08e6e93') || link).textContent.trim(),
			element: link,
			url: link.href
		}));
	}

	function showAddFolderModal() { showFolderMenu(null, 'add'); }

	// --------------------------------------------------------------
	// Generic folder creation / rename / customize modal
	// --------------------------------------------------------------
	function showFolderMenu(folder, mode) {
		const isAdd = mode === 'add';
		const menu = document.createElement('div');
		menu.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#343541;border:1px solid #565869;border-radius:8px;padding:24px;z-index:1003;width:360px;box-shadow:0 10px 40px rgba(0,0,0,0.5);';

		menu.innerHTML = `
			<h3 style="color:#ececf1;margin-bottom:16px;">${isAdd ? 'Создать папку' : mode === 'rename' ? 'Переименовать' : 'Настроить папку'}</h3>
			${mode !== 'customize' ? `<input id="fname" placeholder="Название папки" value="${folder ? folder.name : ''}" style="width:100%;padding:10px;background:#202123;color:#ececf1;border:1px solid #565869;border-radius:6px;margin-bottom:16px;">` : ''}

			${mode !== 'rename' ? `
			<div style="margin-bottom:16px;">
				<h4 style="color:#ececf1;font-size:13px;margin-bottom:8px;">Иконка</h4>
				<div class="icon-grid" style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;">${AVAILABLE_ICONS.map((ic,i) => `<span class="ic" data-idx="${i}" style="cursor:pointer;padding:6px;border-radius:6px;">${ic}</span>`).join('')}</div>
			</div>
			<div>
				<h4 style="color:#ececf1;font-size:13px;margin-bottom:8px;">Цвет</h4>
				<div class="color-grid" style="display:flex;gap:8px;">${AVAILABLE_COLORS.map(c => `<span class="col" data-col="${c}" style="width:32px;height:32px;background:${c};border-radius:50%;cursor:pointer;border:2px solid transparent;"></span>`).join('')}</div>
			</div>` : ''}

			<div style="display:flex;justify-content:flex-end;gap:12px;margin-top:24px;">
				<button class="cancel" style="padding:8px 18px;background:transparent;color:#8e8ea0;border:1px solid #565869;border-radius:6px;">Отмена</button>
				<button class="save" style="padding:8px 18px;background:#10a37f;color:white;border:none;border-radius:6px;">${isAdd ? 'Создать' : 'Сохранить'}</button>
			</div>
		`;

		const backdrop = document.createElement('div');
		backdrop.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.65);z-index:1002;';
		document.body.append(backdrop, menu);

		let selIcon = 0, selColor = '#10a37f';
		if (folder && mode === 'customize') {
			selIcon = AVAILABLE_ICONS.findIndex(ic => ic === folder.icon) || 0;
			selColor = folder.color;
		}

		menu.querySelectorAll('.ic').forEach(el => {
			el.addEventListener('click', () => {
				menu.querySelectorAll('.ic').forEach(e => e.style.outline = '');
				el.style.outline = `2px solid ${selColor}`;
				selIcon = +el.dataset.idx;
			});
		});

		menu.querySelectorAll('.col').forEach(el => {
			el.addEventListener('click', () => {
				menu.querySelectorAll('.col').forEach(e => e.style.borderColor = 'transparent');
				el.style.borderColor = '#fff';
				selColor = el.dataset.col;
			});
		});

		menu.querySelector('.cancel').onclick = () => { menu.remove(); backdrop.remove(); };
		backdrop.onclick = () => { menu.remove(); backdrop.remove(); };

		menu.querySelector('.save').onclick = () => {
			const name = menu.querySelector('#fname') ? menu.querySelector('#fname').value.trim() : folder.name;
			if (!name && mode !== 'customize') return alert('Введите название');

			let folders = GM_getValue(FOLDERS_KEY, []);
			if (isAdd) {
				folders.push({ id: 'f_' + Date.now(), name, icon: AVAILABLE_ICONS[selIcon], color: selColor });
			} else if (folder) {
				const idx = folders.findIndex(f => f.id === folder.id);
				if (idx !== -1) {
					if (mode !== 'customize') folders[idx].name = name;
					folders[idx].icon = AVAILABLE_ICONS[selIcon];
					folders[idx].color = selColor;
				}
			}

			GM_setValue(FOLDERS_KEY, folders);
			isInternalUpdate = true;
			renderFolders();
			isInternalUpdate = false;
			menu.remove(); backdrop.remove();
		};
	}

	// --------------------------------------------------------------
	// Modal to manage which conversations are in a folder
	// --------------------------------------------------------------
	function showManageFolderModal(folder) {
		hideContextMenu();
		const assignments = GM_getValue(ASSIGNMENTS_KEY, {});
		const conversations = getConversations();
		const folderConvs = conversations.filter(conv => assignments[conv.id] === folder.id);
		const otherConvs = conversations.filter(conv => !assignments[conv.id] || assignments[conv.id] !== folder.id);

		const modal = document.createElement('div');
		modal.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#343541;border:1px solid #565869;border-radius:8px;padding:24px;z-index:1003;width:620px;max-height:80vh;overflow-y:auto;box-shadow:0 10px 40px rgba(0,0,0,0.5);';

		modal.innerHTML = `
			<h3 style="color:#ececf1;margin-bottom:16px;">Управление папкой "${folder.name}"</h3>
			<div style="display:flex;gap:20px;">
				<div style="flex:1;">
					<h4 style="color:#ececf1;">В папке (${folderConvs.length})</h4>
					${folderConvs.map(c => `<label style="display:block;margin:6px 0;color:#ececf1;"><input type="checkbox" checked data-id="${c.id}"> ${c.title}</label>`).join('')}
				</div>
				<div style="flex:1;">
					<h4 style="color:#ececf1;">Другие диалоги (${otherConvs.length})</h4>
					${otherConvs.map(c => `<label style="display:block;margin:6px 0;color:#ececf1;"><input type="checkbox" data-id="${c.id}"> ${c.title}</label>`).join('')}
				</div>
			</div>
			<div style="display:flex;justify-content:flex-end;gap:12px;margin-top:20px;">
				<button class="cancel" style="padding:8px 18px;background:transparent;color:#8e8ea0;border:1px solid #565869;border-radius:6px;">Отмена</button>
				<button class="save" style="padding:8px 18px;background:${folder.color};color:white;border:none;border-radius:6px;">Сохранить</button>
			</div>
		`;

		document.body.appendChild(modal);

		modal.querySelector('.cancel').onclick = () => modal.remove();
		modal.querySelector('.save').onclick = () => {
			const checks = modal.querySelectorAll('input[type="checkbox"]');
			const newAssign = { ...assignments };
			checks.forEach(cb => {
				if (cb.checked) newAssign[cb.dataset.id] = folder.id;
				else if (newAssign[cb.dataset.id] === folder.id) delete newAssign[cb.dataset.id];
			});
			GM_setValue(ASSIGNMENTS_KEY, newAssign);
			isInternalUpdate = true;
			renderFolders();
			isInternalUpdate = false;
			modal.remove();
		};
	}

	// --------------------------------------------------------------
	// Apply small folder tag next to conversation titles in the main list
	// --------------------------------------------------------------
	function applyFolderTags() {
		const settings = GM_getValue(SETTINGS_KEY);
		if (!settings.showFolderTags) return;

		const folders = GM_getValue(FOLDERS_KEY, []);
		const assignments = GM_getValue(ASSIGNMENTS_KEY, {});
		const conversations = getConversations();

		conversations.forEach(conv => {
			const folderId = assignments[conv.id];
			const folder = folders.find(f => f.id === folderId);

			// Remove existing tag if any
			const existingTag = conv.element.querySelector('.ds-folder-tag');
			if (existingTag) existingTag.remove();

			if (folder) {
				const tag = document.createElement('span');
				tag.className = 'ds-folder-tag';
				tag.innerHTML = `
					<span style="display: inline-flex; align-items: center; margin-right: 4px; width: 12px; height: 12px;">
						${folder.icon}
					</span>
					<span>${folder.name}</span>
				`;
				tag.style.cssText = `
					display: inline-flex;
					align-items: center;
					background: ${folder.color}15;
					color: ${folder.color};
					padding: 2px 6px;
					border-radius: 4px;
					font-size: 10px;
					margin-left: 6px;
					vertical-align: middle;
					border: 1px solid ${folder.color}30;
					max-width: 100px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				`;

				const titleElement = conv.element.querySelector('[class*="title"], .c08e6e93') || conv.element;
				if (titleElement) {
					titleElement.appendChild(tag);
				}
			}
		});
	}

	// --------------------------------------------------------------
	// Clean up context menus
	// --------------------------------------------------------------
	function hideFolderMenu() {
		document.querySelectorAll('.ds-folder-menu').forEach(menu => menu.remove());
		document.querySelectorAll('.ds-menu-backdrop').forEach(backdrop => backdrop.remove());
	}

	setTimeout(init, 1500);
	console.log('✅ Полная версия v4.9 загружена');
})();