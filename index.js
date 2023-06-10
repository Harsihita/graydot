// Get the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag events
container1.addEventListener('dragstart', handleDragStart);
container2.addEventListener('dragend', handleDragOver);
container2.addEventListener('drop', handleDrop);
resetButton.addEventListener('click', resetContainers);

// Store the dragged item
let draggedItem = null;

// Drag start event handler
function handleDragStart(event) {
  draggedItem = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
  this.classList.add('dragging');
}

// Drag over event handler
function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  this.classList.add('drag-end');
}

// Drop event handler
function handleDrop(event) {
  event.preventDefault();
  if (draggedItem !== null) {
    this.innerHTML = event.dataTransfer.getData('text/html');
    draggedItem.parentNode.removeChild(draggedItem);
    this.classList.remove('drag-end');
    this.classList.add('success');
    draggedItem = null;
  }
}

// Reset the containers and remove success class
function resetContainers() {
  container1.innerHTML = '<div class="item" draggable="true">Item 1</div><div class="item" draggable="true">Item 2</div><div class="item" draggable="true">Item 3</div>';
  container2.innerHTML = '';
  container2.classList.remove('success');
}

