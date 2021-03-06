import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      linkedin: author.linkedin,
      github: author.github,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="m374,0h-236c-76.2,0-138,61.8-138,138v236c0,76.2 61.8,138 138,138h236c76.2,0 138-61.8 138-138v-236c0-76.2-61.8-138-138-138zm10.9,267.7c-1,23.6-5.8,45.8-21.1,64.7-10.6,13-24.3,21.3-40.1,26.5-15.8,5.1-32.1,6.6-48.6,6.5-16.5-0.1-32.9,0.4-49.4-0.2-18.3-0.6-36.1-4-52.5-12.6-19.9-10.5-33.2-26.7-40-48.2-4.5-14-6.5-28.3-6.2-43 0.3-17.2 5.1-32.9 15.7-46.5 3.1-4.1 4.7-7.6 4.3-13.4-0.7-9.2 0.7-18.7 2.2-27.9 1.3-7.7 3.8-15.2 6-22.8 0.2-0.8 0.6-1.6 1.1-2.3 0.7-1.2 3.8-1.6 6.8-0.8 19.9,5.3 37.6,14.7 54.6,25.7 1.7,1.1 4.4,1.5 6.5,1.1 14.9-2.6 29.8-3 44.8-2.3 6.1,0.3 12,1.8 18.1,2.2 2.6,0.2 5.6-0.3 7.7-1.6 15.6-9.8 31.9-18.2 49.4-24 1.6-0.6 3.4-1 5.3-1.4 3-0.6 6.2,1.2 7.3,4.1 1.4,3.8 2.9,7.7 3.6,11.8 2.1,11.8 4.7,23.8 4.5,35.6-0.1,7.9 2.3,13 6.5,19.1 10.6,14.8 14.3,31.7 13.5,49.7z" />
                  <path d="m328.7,257.1c-7.3-3.3-15.9-4.8-24-5.3-8.9-0.5-18,1.6-27,1.5-19.7-0.2-39.4-1.2-59.1-1.4-7.9-0.1-15.7,0.9-23.5,1.4-7.1,0.4-13.1,3.3-18.5,7.9-21.1,17.9-17.9,50.7-5.1,67.9 8,10.8 19.5,15.8 32.1,18.8 17.1,4.1 34.4,5.2 52,4.4 17.8,0.8 35.5-0.2 52.9-4.4 8.9-2.1 17.5-5 24.6-11.1 15.5-13.4 19.5-30.9 16.5-50.3-2-12.9-8.6-24-20.9-29.4zm-117.4,67.3c-10.383,0-18.8-11.238-18.8-25.1 0-13.862 8.417-25.1 18.8-25.1 10.383,0 18.8,11.238 18.8,25.1-2.84217e-14,13.862-8.417,25.1-18.8,25.1zm89.7,0c-10.383,0-18.8-11.238-18.8-25.1 0-13.862 8.417-25.1 18.8-25.1 10.383,0 18.8,11.238 18.8,25.1 0,13.862-8.417,25.1-18.8,25.1z" />
                </g>
              </svg>
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
