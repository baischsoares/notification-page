const bntMarkAll = document.querySelector('.markAll')
let notifications = document.querySelectorAll('.notificacao')


notifications.forEach((notification) => {
  notification.addEventListener('click', function read(){
  this.classList.remove('unread')
  totalNaoLida()
  })
})


function readNotificationsAll(){
  let unreadNotifications = document.querySelectorAll('.unread')
  unreadNotifications.forEach((notification) =>{
    notification.classList.remove('unread')
  }
  )
  totalNaoLida()
};
bntMarkAll.addEventListener('click', readNotificationsAll)


function totalNaoLida(){
  let unreadTotal = document.querySelector('.unReadTotal')
  let unreadNotifications = document.querySelectorAll('.unread')
  unreadTotal.innerText = unreadNotifications.length
}
totalNaoLida()