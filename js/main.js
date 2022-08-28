 /* 
  * Title: DOM Project 
  * Description: DOM manupulation in Programming Hero web site 
  * Author: Md. Abu Noman 
  * Date: 15-Aug-2022 
  * 
  */ 

//JSON data from programming hero web site
const dataObj = data.data;
console.log(dataObj);

// load course milestone's data 
function loadMilestones( ) {
    let milestones = document.querySelector('.milestones');
    
    milestones.innerHTML = `${dataObj.map(function(milestone){
        return `
        <div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div onclick = "openMilestone(this)">
                <p>
                  ${milestone.name}
                  </p>
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
                ${milestone.modules.map(function(module){
                    return `<div class="module border-b">
                    <p>${module.name}</p>
                  </div>`
                }).join('')}
            </div>
          </div>`;
    }).join('')}`;

    console.log(milestones);
}
loadMilestones();

function openMilestone(milestoneElement) {
        let currentPanel = milestoneElement
        let currentPanelParent = currentPanel.parentElement
        let currentPanelParentSibling = currentPanelParent.nextElementSibling;

        // currentPanelParentSibling.classList.toggle('show')

        let shownPanel = document.querySelector('.show')
        
        //first remove previous show class if any [other than the clicked one]
        if(currentPanelParentSibling.classList.contains('show') === false && shownPanel != null){
            shownPanel.classList.remove('show');
        }

        currentPanelParentSibling.classList.toggle('show')

        let active = document.querySelector('.active')
        //first remove previous active class if any [other than the clicked one]
        if (!currentPanel.classList.contains('active') && active != null) {
            active.classList.remove('active');
        }
        currentPanel.classList.toggle('active')
       
       
    }




    



