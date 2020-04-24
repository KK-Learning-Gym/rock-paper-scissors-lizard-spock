const initialState = {
	page: 'home',
	score: 0,
	choice: {
		player: null,
		house: null,
	},
	result: 'unknown',
}

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'PAGE':
			return { ...state, page: action.data }
		case 'SCORE':
			return { ...state, score: state.score + 1 }
		case 'CHOICE':
			return { ...state, choice: action.data }
		case 'RESULT':
			return { ...state, result: action.data }
		case 'CLEAR':
			return { ...initialState, score: state.score }

		default:
			return state
	}
}

export const setPage = page => {
	return {
		type: 'PAGE',
		data: page,
	}
}

export const setScore = () => {
	return {
		type: 'SCORE',
	}
}

export const setChoice = choice => {
	return {
		type: 'CHOICE',
		data: choice,
	}
}

export const setResult = result => {
	return {
		type: 'RESULT',
		data: result,
	}
}

export const clear = () => {
	return {
		type: 'CLEAR',
	}
}

export default gameReducer
