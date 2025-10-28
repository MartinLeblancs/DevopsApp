FROM python:3.12-slim

# Variables d'environnement pour éviter le buffering
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Installer dépendances système pour psycopg2
RUN apt-get update && apt-get install -y gcc libpq-dev

# Copier les fichiers requirements
COPY requirements.txt .

# Installer les dépendances Python
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copier le reste du code
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
