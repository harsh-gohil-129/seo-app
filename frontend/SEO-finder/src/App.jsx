import React, { Component } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessDisplay from './components/BusinessDisplay';
import './App.css';

class App extends Component {
  state = {
    businessData: null,
    loading: false,
    error: ''
  };

  handleData = (data) => this.setState({ businessData: data });
  setLoading = (loading) => this.setState({ loading });
  setError = (error) => this.setState({ error });

  regenerateHeadline = async () => {
    const { businessData } = this.state;
    this.setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/regenerate-headline?name=${encodeURIComponent(businessData.name)}&location=${encodeURIComponent(businessData.location)}`
      );
      const json = await res.json();
      this.setState({
        businessData: { ...businessData, headline: json.headline }
      });
    } catch (e) {
      this.setError('Failed to regenerate headline');
    }
    this.setLoading(false);
  };

  render() {
    const { businessData, loading, error } = this.state;

    return (
      <div className="app-container">
        <div className="app-overlay pt-10 pb-20">
          <header className="w-11/12 mx-auto mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100">
              <span className="text-emerald-100">GrowthProAI</span> Business Dashboard
            </h1>
            <p className="text-md sm:text-lg lg:text-xl mt-4 max-w-3xl mx-auto text-gray-50">
              Track and optimize your business's online presence with AI-powered insights
            </p>
          </header>

          {!businessData ? (
            <BusinessForm
              onData={this.handleData}
              setLoading={this.setLoading}
              setError={this.setError}
              loading={loading} 
            />
          ) : (
            <BusinessDisplay
              data={businessData}
              loading={loading}
              onRegenerate={this.regenerateHeadline}
            />
          )}

          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </div>
      </div>
    );
  }
}

export default App;