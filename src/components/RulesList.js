import React from 'react'

const RulesList = () => {
    return (
    <div>
        <h1>Albert Einstein's Rules of Work</h1>
        <img src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=qc6CJjYAAAAJ&citpid=2"
            alt="Albert Einstein"
            className="profile-photo" />
        <ul style={
                {
                    backgroundColor: 'black',
                    color: 'yellow'
                }
            }
        >
            <li>Out of clutter, simplicity.</li>
            <li>From discord, find harmony.</li>
            <li>In the middle of difficulty, lies opportunity.</li>
        </ul>
    </div>
    )
}

export default RulesList