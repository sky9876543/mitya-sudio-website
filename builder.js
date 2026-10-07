// Prepared local walkthrough. No requests, model calls, or generated responses.
(() => {
 const root = document.querySelector('[data-builder]');
 if (!root) return;
 const steps = [
  ['Creative brief','Start with your direction','Example brief','builder-brief','Choose the story, audience, visual direction, and reusable assets.','Clarify the brief and propose a production plan. In-product API integration is planned.','Assistant-guided authoring happens outside the app. Scene and character tools are experimental prototypes.'],
  ['Story & shots','Agree on what to make','Illustrative plan / API planned','builder-plan','Review the shots, change the sequence, and decide what should happen on screen.','Draft story beats and structured shot requests, then revise from your feedback. This is the planned API role, not a live response.','A story compiler checks structured plans and reports unresolved production decisions. It does not draw or animate.'],
  ['Build & direct','Work directly with the scene','Actual prototype capture','builder-image','Arrange reusable pieces, place characters, and frame the camera in Scene Studio.','Translate an approved plan into validated tool requests and coordinate production steps. The connected API workflow is planned.','Scene Studio has Build, Stage, and Shoot modes. This is a real capture, not an editable canvas on this website.'],
  ['Preview & revise','Watch, review, refine','Actual recorded output','builder-video','Play the recorded sequence. In the intended workflow, review it and choose what to change before export.','Interpret revision notes, such as a closer camera framing, and prepare updated tool requests. This feedback loop is planned.','The prototype records camera-shot sequences as WebM and exports PNG frames. This 10.5-second recording is not full character animation.']
 ];
 const buttons = [...root.querySelectorAll('[data-step]')];
 let current = 0;
 function select(index) {
  current = index;
  const s = steps[index];
  document.getElementById('builder-video').pause();
  steps.forEach(row => { document.getElementById(row[3]).hidden = row !== s; });
  buttons.forEach((b,i) => b.setAttribute('aria-pressed',String(i === index)));
  ['builder-view','builder-step-title','builder-state',null,'builder-you','builder-claude','builder-today'].forEach((id,i) => { if(id) document.getElementById(id).textContent = s[i]; });
  document.getElementById('builder-position').textContent = `Step ${index + 1} of 4`;
  document.getElementById('builder-next').textContent = index === 3 ? 'Back to the brief ↺' : `Next: ${steps[index + 1][0]} →`;
 }
 buttons.forEach((button,index) => button.addEventListener('click',() => select(index)));
 document.getElementById('builder-next').addEventListener('click',() => select((current + 1) % 4));
})();
