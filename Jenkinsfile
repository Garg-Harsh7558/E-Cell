pipeline {
    agent {
        node {
            label 'built-in'
        }
    }
    stages {
        stage('Fetch SCM: GITHUB') {
            steps {
                echo 'Getting Everything from SCM'
                checkout scm
                sh 'git log -1 --pretty=%B'
            }
        }

        stage('Build') {
            steps {
                echo 'Building....'
                sh '''
                    mkdir -p /gymkhana-portal/ecell
                    cp -rvf $WORKSPACE/* /gymkhana-portal/ecell
                    cd /gymkhana-portal/ecell
                    sudo su gymkhana -c \'
                        export NVM_DIR="/gymkhana-portal/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                        npm install
                        export CI=false
                        npm run build
                    \'
                '''
            }
        }
    }
}
