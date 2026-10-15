pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Automated Testing') {
            steps {
                bat 'npm test'
            }
        }
        
        
stage('Docker Build') {
    steps {
        bat '"C:\\Users\\mahad\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe" build -t student-task-manager:cie .'
    }
}

    }
}