# <img width="24" height="24" alt="leaf (1)" src="https://github.com/user-attachments/assets/4e96f8e3-6cc2-4683-863d-a6b400446134" /> LeafPilot
The AI LaTeX Editor. Become an extraordinary researcher. student. professor.

## Architechture
**Frontend**: Next.js, TypeScript, Zustand

**Backend**: Python, FastAPI, Groq, Pydantic

## Running locally
First, clone the repo
```bash
git clone https://github.com/jbauerko/htn-2025.git
cd htn-2025
```
### Frontend
```bash
cd frontend
cp .env.example .env #fill in with env secrets
```
Next, run it with:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend
```bash
cd backend
cp .env.example .env #fill in with env secrets
```
Next, run it with:
#### Windows
```bash
./setup_project.ps1
./run.ps1
```
### Linux/Mac
```bash
./setup_project.sh
./run.sh
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.
