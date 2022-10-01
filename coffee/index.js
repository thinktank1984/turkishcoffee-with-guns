console.info("Loading plugins")
const gun = Gun(`${window.location.origin}/gun`).get('thoughts')

    const parentList = document.getElementById('parentList')
    const input = document.getElementById('input')
    const form = document.getElementById('form')

    const dynamicEvent = e => {
      const target = e.target;

      gun.get(target.id).put(null);

      target.innerHTML = document.getElementById(target.id);

      if (target.innerHTML === ' null' || target.innerHTML === ' ' || target.innerHTML === '') {
        target.style.display = 'none';
      } else {
        target.style.display = 'list-item';
      }
    }

    gun.map().on((thought, id) => {
      parentList.insertAdjacentHTML('beforeend', `<li id =${id}> ${thought}</li>`);

      const links = parentList.getElementsByTagName('li');

      for (const link of links) {
        if (link.innerHTML === ' null' || link.innerHTML === ' ' || link.innerHTML === '') {
          link.style.display = 'none';
        } else {
          link.style.display = 'list-item';
        }
        link.ondblclick = dynamicEvent;
      }
    })

    form.addEventListener('submit', e => {
      e.preventDefault();
      gun.set(input.value);
      input.value = '';
    })