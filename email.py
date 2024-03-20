import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import subprocess
from datetime import datetime

email_host = ''
email_port = 587
email_user = ''
email_password = ''