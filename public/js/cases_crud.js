// cases_crud.js - Handle the CRUD operations for case studies

// Flag to track if this script has already displayed case studies
window.caseStudiesDisplayed = false;

// Fetch all case studies
async function fetchCaseStudies() {
  // Implementation of fetching case studies from server/localStorage/etc.
  try {
    // Example implementation using localStorage
    const dataStr = localStorage.getItem('caseStudies') || '[]';
    const data = JSON.parse(dataStr);
    console.log('Fetched case studies:', data.length);
    return data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

// Fetch a specific case study by ID
async function fetchCaseStudyById(id) {
  try {
    const caseStudies = await fetchCaseStudies();
    return caseStudies.find(cs => cs.id === id) || null;
  } catch (error) {
    console.error('Error fetching case study by ID:', error);
    throw error;
  }
}

// Create a new case study
async function createCaseStudy(caseStudyData) {
  try {
    const caseStudies = await fetchCaseStudies();
    const newCaseStudy = {
      ...caseStudyData,
      id: Date.now().toString(), // Simple ID generation
      createdAt: new Date().toISOString()
    };
    caseStudies.push(newCaseStudy);
    localStorage.setItem('caseStudies', JSON.stringify(caseStudies));
    return newCaseStudy;
  } catch (error) {
    console.error('Error creating case study:', error);
    throw error;
  }
}

// Update an existing case study
async function updateCaseStudy(updatedCaseStudy) {
  try {
    const caseStudies = await fetchCaseStudies();
    const index = caseStudies.findIndex(cs => cs.id === updatedCaseStudy.id);
    if (index === -1) {
      throw new Error('Case study not found');
    }
    caseStudies[index] = {
      ...caseStudies[index],
      ...updatedCaseStudy,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('caseStudies', JSON.stringify(caseStudies));
    return caseStudies[index];
  } catch (error) {
    console.error('Error updating case study:', error);
    throw error;
  }
}

// Delete a case study
async function deleteCaseStudyFromServer(id) {
  try {
    const caseStudies = await fetchCaseStudies();
    const updatedCaseStudies = caseStudies.filter(cs => cs.id !== id);
    localStorage.setItem('caseStudies', JSON.stringify(updatedCaseStudies));
    return true;
  } catch (error) {
    console.error('Error deleting case study:', error);
    throw error;
  }
}

// Check if we need to initialize with sample data for testing
document.addEventListener('DOMContentLoaded', async () => {
  console.log('cases_crud.js: DOM content loaded');
  
  // Only initialize sample data if no case studies exist yet
  const caseStudies = await fetchCaseStudies();
  if (caseStudies.length === 0) {
    console.log('Initializing sample case studies');
    // Add some sample case studies for testing
    await createCaseStudy({
      title: 'Modernizing Customer Portal',
      subtitle: 'UX Redesign for B2B Platform',
      description: 'Redesigned customer portal to improve user engagement and reduce support calls.',
      category: 'UX Design',
      delivery_date: '2024-02-15',
      image_url: '/assets/images/case-studies/portal.jpg',
      tools: 'Figma, Maze, UserTesting',
      client: 'Enterprise Corp'
    });
    
    await createCaseStudy({
      title: 'Mobile Banking App',
      subtitle: 'Fintech User Experience',
      description: 'Created intuitive banking experience for digital-first customers.',
      category: 'Mobile Design',
      delivery_date: '2023-11-10',
      image_url: '/assets/images/case-studies/banking.jpg',
      tools: 'Sketch, InVision, Analytics',
      client: 'FinBank'
    });
  }
  
  // Set the flag but DON'T display case studies - let casestudies.js handle that
  window.caseStudiesDisplayed = false;
});