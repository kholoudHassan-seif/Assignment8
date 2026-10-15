// 1. Elements Selection
var contactNameInput = document.getElementById("contactNameInput");
var contactPhoneInput = document.getElementById("contactPhoneInput");
var contactEmailInput = document.getElementById("contactEmailInput");
var contactAddressInput = document.getElementById("contactAddressInput");
var contactGroupInput = document.getElementById("contactGroup");
var contactNotesInput = document.getElementById("contactNotesInput");
var searchInput = document.getElementById("searchInput");

var ContactList = [];
var currentIndex = null; 

if(localStorage.getItem('ContactList') != null) {   
    ContactList = JSON.parse(localStorage.getItem('ContactList'));
    displayAllContacts(); 
}

function AddContact() {
var namevalid=validateContact(contactNameInput);
var phonevalid=validateContact(contactPhoneInput);
var emailval=contactEmailInput.value.trim();
var Emailvalid = (emailval ==="") ||validateContact(contactEmailInput);
 
  if(!namevalid||!phonevalid||!Emailvalid)
  {
     Swal.fire({
        icon:'error',
        title:'Oops.....',
        text:'Please Fill in All Required fields correctly...',
        
     });
     return;
  }

    var isFav = document.getElementById('isFavorite').checked;
    var isEmg = document.getElementById('isEmergency').checked;

    var Contact = {
        name: contactNameInput.value,
        Phone: contactPhoneInput.value,
        Email: contactEmailInput.value,
        Address: contactAddressInput.value,
        Group: contactGroupInput.value,
        Notes: contactNotesInput.value,
        favorite: isFav,
        emergency: isEmg
    };

    if (currentIndex !== null) {
        ContactList[currentIndex] = Contact;
        currentIndex = null; 
        
        var saveBtn = document.getElementById("saveContactBtn");
        if (saveBtn) saveBtn.innerHTML = "Add Contact";
    } else {
        ContactList.push(Contact);
    }

    // 4. LocalStorage
    localStorage.setItem('ContactList', JSON.stringify(ContactList));  

    displayAllContacts();

    resetFormAndModal();
    Swal.fire({
        icon:'success',
        title:'Added Success',
        text:'Contact has been saved successfully.',
        timer:2000,
        showConfirmButton:false
        
     });
     return;
}

function displayAllContacts(list) {
    var CurrentList =list||ContactList;
    var contactsContainer = document.getElementById("contactsContainer"); 
    var EmptyState = document.getElementById("EmptyState");
    var empty_favorit = document.getElementById("empty_favorit");
    var empty_emergency = document.getElementById("empty_emergency");
    countContact();
    
    if (CurrentList.length > 0) {
        EmptyState.style.display = "none";
        empty_favorit.style.display = "none";
        empty_emergency.style.display = "none";
    } else {
        EmptyState.style.display = "block";
        empty_favorit.style.display = "none";
        empty_emergency.style.display = "none";
    }

    var cartona = "";

    for (var i = 0; i < CurrentList.length; i++) {
        var contact = CurrentList[i];
        var firstLetter = contact.name.charAt(0).toUpperCase();
        
        cartona += `
            <div class="col-md-4 mb-3">
                <div class="card p-3 shadow-sm border-0 rounded-4 position-relative h-100">                    
                    <div class="d-flex align-items-start mb-3">
                        <div class="rounded-4 bg-primary text-white d-flex justify-content-center align-items-center me-3 fw-bold flex-shrink-0 shadow-sm" style="width: 50px; height: 50px; font-size: 20px;">
                            ${firstLetter}
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="mb-1 fw-bold text-dark">${contact.name}</h5>
                            <p class="mb-0 text-muted small"><i class="fa-solid fa-phone me-2 text-primary"></i>${contact.Phone}</p>
                        </div>
                    </div>

                    <p class="mb-2 text-muted small"><i class="fa-solid fa-envelope me-2 text-secondary"></i>${contact.Email || 'No email provided'}</p>
                    
                    <p class="mb-3 text-muted small"><i class="fa-solid fa-location-dot me-2 text-success"></i>${contact.Address || 'No address provided'}</p>

                    <div class="d-flex flex-wrap gap-2 mb-2 align-items-center">
                        <span class="badge bg-light text-primary border px-3 py-2 rounded-pill">${contact.Group || 'Family'}</span>
                        ${contact.emergency ? '<span class="badge bg-danger-subtle text-danger px-2 py-1"><i class="fa-solid fa-heart-pulse me-1"></i>Emergency</span>' : ''}
                        ${contact.favorite ? '<span class="badge bg-warning-subtle text-warning px-2 py-1"><i class="fa-solid fa-star me-1"></i>Favorite</span>' : ''}
                    </div>

                    <div class="d-flex justify-content-end gap-3 mt-auto pt-3 border-top text-muted">
                        <i style="cursor:pointer" class="${contact.favorite ? 'fa-solid text-warning' : 'fa-regular'} fa-star " title="Favorite" onclick="toggleFavorite(${i})"></i>
                        
                        <i style="cursor:pointer" class="fa-solid fa-heart-pulse  ${contact.emergency ? 'text-danger' : ''}" title="Emergency" onclick="toggleEmergency(${i})"></i>
                        
                        <i style="cursor:pointer" class="fa-solid fa-pen " title="Edit" onclick="updateContact(${i})"></i>
                        <i class="fa-solid fa-trash text-danger" style="cursor:pointer" title="Delete" onclick="deleteContact(${i})"></i>
                    </div>

                </div>
            </div>
        `;
    }

    contactsContainer.innerHTML = cartona;
}

function countContact(){
    var TotalCount = ContactList.length;
    var FavoritCount = 0;
    var EmergencyCount = 0;
    var Favorites_side = document.getElementById("list_favourit");   
    var Emergency_side = document.getElementById("list_emergency"); 
    var side_fav = '';
    var side_emerg = '';

    for(var i = 0; i < ContactList.length; i++) {
        if(ContactList[i].favorite) {
            FavoritCount++;
            side_fav += `<div class="py-2">
                      <small class="bg-warning p-2 rounded-2 text-dark ">${ContactList[i].name}</small>
                      <small class=" text-black ps-2 rounded-2 " >${ContactList[i].Phone}</small></div>`;
        }
        if(ContactList[i].emergency) {   
            EmergencyCount++;
            side_emerg += `<div class="py-2">
                      <small class="bg-danger p-2 rounded-2 text-light ">${ContactList[i].name}</small>
                      <small class=" text-black ps-2 rounded-2 " >${ContactList[i].Phone}</small></div>`;
        }
    }

    var statarray = document.querySelectorAll(".stat-card h4");
    if(statarray.length >= 3){
        statarray[0].innerHTML = TotalCount;
        statarray[1].innerHTML = FavoritCount;
        statarray[2].innerHTML = EmergencyCount;
    }    
    if (Favorites_side) Favorites_side.innerHTML = side_fav;
    if (Emergency_side) Emergency_side.innerHTML = side_emerg;
}

function deleteContact(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "Do You want to delete this contact!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            ContactList.splice(index, 1);
            localStorage.setItem('ContactList', JSON.stringify(ContactList));
            displayAllContacts();

            Swal.fire(
                'Deleted!',
                'Your contact has been deleted.',
                'success'
            );
        }
    });
}

function updateContact(index) {
    currentIndex = index; 
    var contact = ContactList[index];

    contactNameInput.value = contact.name;
    contactPhoneInput.value = contact.Phone;
    contactEmailInput.value = contact.Email;
    contactAddressInput.value = contact.Address;
    contactGroupInput.value = contact.Group;
    contactNotesInput.value = contact.Notes;
    document.getElementById('isFavorite').checked = contact.favorite;
    document.getElementById('isEmergency').checked = contact.emergency;

    var saveBtn = document.getElementById("saveContactBtn");
    if (saveBtn) saveBtn.innerHTML = "Update Contact";

    var modalElement = document.getElementById('addContactModal');
    var modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalInstance.show();
}

function resetFormAndModal() {
    document.getElementById("addContactForm").reset();
    currentIndex = null;

    var saveBtn = document.getElementById("saveContactBtn");
    if (saveBtn) saveBtn.innerHTML = "Add Contact";

    var modalElement = document.getElementById('addContactModal');
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
}
function toggleFavorite(index) {
    ContactList[index].favorite = !ContactList[index].favorite;
    if (ContactList[index].favorite) {
        ContactList[index].emergency = false; 
    }
    
    localStorage.setItem('ContactList', JSON.stringify(ContactList));
    displayAllContacts();
}

function toggleEmergency(index) {
    ContactList[index].emergency = !ContactList[index].emergency;
    if (ContactList[index].emergency) {
        ContactList[index].favorite = false; 
    }
    
    localStorage.setItem('ContactList', JSON.stringify(ContactList));
    displayAllContacts();
}

function searchByname_phone_email()
{
    console.log('hiiiiiii');
    var searchList = [];

    for (var i = 0; i < ContactList.length; i++) {
         
        var Namesearch=ContactList[i].name.toLowerCase().includes(searchInput.value.toLowerCase());
        var Phonesearch=ContactList[i].Phone.toLowerCase().includes(searchInput.value.toLowerCase());
        var Mailsearch=ContactList[i].Email&&ContactList[i].Email.toLowerCase().includes(searchInput.value.toLowerCase());
        if (Namesearch||Phonesearch||Mailsearch) {
            
            searchList.push(ContactList[i])
        }

    }
    console.log(searchList);
    displayAllContacts(searchList);

    
}



function validateContact(element) {
    var regex = {
        contactNameInput: /^[a-zA-Zء-ي\s]{3,}$/, 
        contactPhoneInput: /^[0-9]{8,15}$/,    
        contactEmailInput: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        contactAddressInput: /^.*$/,
        contactNotesInput: /^.*$/
    };

    var value = element.value.trim();

    var isOptional = (element.id === 'contactEmailInput' || element.id === 'contactAddressInput' || element.id === 'contactNotesInput');
    if (isOptional && value === "") {
        element.classList.remove('is-invalid', 'is-valid');
        
        if (element.nextElementSibling && element.nextElementSibling.classList.contains('d-block')) {
            element.nextElementSibling.classList.replace('d-block', 'd-none');
        }
        return true;
    }

    if (regex[element.id] && regex[element.id].test(value)) {
        if (element.nextElementSibling && element.nextElementSibling.classList.contains('d-block')) {
            element.nextElementSibling.classList.replace('d-block', 'd-none');
        }
        if (element.classList.contains('is-invalid')) {
            element.classList.remove('is-invalid');
        }
        element.classList.add('is-valid');
        return true;
    } else {
        if (element.classList.contains('is-valid')) {
            element.classList.remove('is-valid');
        }
        element.classList.add('is-invalid');
        
        if (element.nextElementSibling && element.nextElementSibling.classList.contains('d-none')) {
            element.nextElementSibling.classList.replace('d-none', 'd-block');
        }
        return false;
    }
}


